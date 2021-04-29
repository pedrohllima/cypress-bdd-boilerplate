<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/1268976/20607953/d7ae489c-b24a-11e6-9cc4-91c6c74c5e88.png"/>
</p>

## Boilerplate para automação de testes E2E com Cypress

para instalar todas as depências
````bash
   npm install
````

## Como correr os testes

Abrir a aplicação do Cypress 
```bash
./node_modules/.bin/cypress open
```
 ou 
 
```bash
npx cypress open
```

depois, basta carregar em um  ficheiro `.feature` na lista de specs e ver a mágica acontecer :)!

### Correndo Testes a partir de uma Tag

Você pode usar tags para selecionar qual teste deve ser executado usando a syntax do gherkin.

Para inicializar os testes usando tags, você terá que executar o cypress e passar a variável de ambiente TAGS.
Example:

```shell
  ./node_modules/.bin/cypress-tags run -e TAGS='@test'
```

Referência: https://github.com/cucumber/cucumber/tree/master/tag-expressions


### Ignorando cenários específicos usando tags em modo headless

Você também pode usar tags para pular ou ignorar testes / cenários específicos ao executar pelo Cypress test runner (onde você não tem a capacidade de passar parâmetros como nos exemplos acima para a execução)

O truque consiste em adicionar a propriedade "env" com a subpropriedade "TAGS" no ficheiro de configuração cypress.json. Seria mais ou menos assim:
```javascript
{
    "env": {
        "TAGS": "not @ignore"
    },
    //rest of configuration options
    "baseUrl": "yourBaseUrl",
    "ignoreTestFiles": "*.js",
    //etc
}
```

Então, quaisquer cenários marcados com @ignore serão ignorados ao executar os testes usando o executor de teste cypress

### Limiting to a subset of feature files

Você pode usar uma expressão glob para selecionar quais arquivos de feições devem ser incluídos.

Example:

```shell
  ./node_modules/.bin/cypress-tags run -e GLOB='cypress/integration/**/*.feature'
```


## Referências
* https://cucumber.io/docs/gherkin/reference/
* https://docs.cypress.io/guides/references/best-practices
* https://github.com/TheBrainFamily/cypress-cucumber-preprocessor
