import { Router, Request, Response } from "express";
import { ScrapperService } from "../services/scrapper";

const router = Router();
const scrapperService = new ScrapperService()

router.post('/start', async (request: Request, response: Response) => {
  const body = request.body

  const content = await scrapperService.start({ words: body.words, period: body.period })

  return response.send(content)
})

export default router