# hacking-rio-2022
Repositório para armazenas os códigos do hacking rio 2022

---
## Rodando o projeto
````git
$ git clone git@github.com:AdeLuigi/hacking-rio-2022.git
$ cd hacking-rio-2022
$ yarn
````

## Neste momento as aplicações já estão prontas para rodar
````git
$ yarn start
````

Agora o client está rodando no http://localhost:3000/ e server em http://localhost:4000/

## Estrutura do projeto
    hacking-rio-2022
        --packages
            |--app
            |   |--package.json
            |   |--package-lock.json
            |
            |--api
                |--package.json
                |--package-lock.json
        --package.json
        --package-lock.json
Caso queira adicionar mais um projeto neste monorepo, coloque dentro da pasta packages

## Adicionando pacotes

---
### Adicione pacotes **compartilhados** na raiz do projeto
````git
$ yarn add <nome_pacote> -W
````
### Adicione pacotes **específicos** na pasta do projeto
````git
$ yarn workspace <nome_projeto> add <nome_pacote>
````