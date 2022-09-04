import puppeteer from 'puppeteer'
import { load } from 'cheerio'

interface StartScrapperParams {
  words: string[]
  period?: '1d' | '7d' | '1y'
}

export class ScrapperService {
  async start({ words, period }: StartScrapperParams) {
    const puppeteerConfig = {
      headless: true,
    }

    const browser = await puppeteer.launch(puppeteerConfig)
    const links = []

    for await (const word of words) {
      const url = this.buildUrl(word, period)
      const content = await this.retrievePageContent(browser, url)
      const parsedContent = this.parsePageContent(content, word)
      links.push(...parsedContent)
    }

    return links
  }

  private buildUrl(term: string, period?: StartScrapperParams['period']) {
    return `https://news.google.com/search?q=${term} ${period && 'when:' + period}&hl=pt-BR&gl=BR&ceid=BR:pt-419`
  }

  private async retrievePageContent(browser: puppeteer.Browser, url: string): Promise<string> {
    const page = await browser.newPage()

    page.setViewport({ width: 1366, height: 768 })
    page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36')
    page.setRequestInterception(true)
    page.on('request', request => {
      if (!request.isNavigationRequest()) {
        request.continue()
        return
      }
      const headers = request.headers()
      headers['Accept'] = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'
      headers['Accept-Encoding'] = 'gzip'
      headers['Accept-Language'] = 'en-US,en;q=0.9,es;q=0.8'
      headers['Upgrade-Insecure-Requests'] = '1'
      headers['Referer'] = 'https://www.google.com/'
      request.continue({ headers })
    })
    await page.setCookie({
      name: "CONSENT",
      value: `YES+cb.${new Date().toISOString().split('T')[0].replace(/-/g, '')}-04-p0.en-GB+FX+667`,
      domain: ".google.com"
    });
    await page.goto(url, { waitUntil: 'networkidle2' })
    return page.content()
  }

  private parsePageContent(content: string, word: string): Record<string, any>[] {
    const $ = load(content)
    const articles = $('a[href^="./article"]').closest('div[jslog]')
    const results = [] as Record<string, any>[]
    const urlChecklist = [] as string[]

    $(articles).each(function () {
      const linkExists = $(this).find('a[href^="./article"]')?.attr('href')
      if (!linkExists) {
        return
      }
      const link = linkExists.replace('./', 'https://news.google.com/') || false
      link && urlChecklist.push(link)
      const articleDatetime = $(this)?.find('div:last-child time')?.attr('datetime')
      const mainArticle = {
        "title": $(this).find('h3').text() || false,
        "link": link,
        "image": $(this).find('figure').find('img').attr('src') || false,
        "source": $(this).find('div:last-child svg+a').text() || false,
        "datetime": articleDatetime ? new Date(articleDatetime) : false,
        "time": $(this).find('div:last-child time').text() || false,
        "related": [] as any[],
        "searchedKey": word,
      }

      const subArticles = $(this).find('div[jsname]').find('article')
      $(subArticles).each(function () {
        const subLinkExists = $(this).find('a').first().attr('href')
        const subLink = subLinkExists?.replace('./', 'https://news.google.com/') || false
        if (subLink && !urlChecklist.includes(subLink)) {
          mainArticle.related.push({
            "title": $(this).find('h4').text() || $(this).find('h4 a').text() || false,
            "link": subLink,
            "source": $(this).find('div:last-child svg+a').text() || false,
            "time": $(this).find('div:last-child time').text() || false
          })
        }
      })
      results.push(mainArticle)
    })

    return results
  }
}