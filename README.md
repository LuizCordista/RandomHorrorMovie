# Web Scraping Jcom Puppeteer

## IMDB Web Scraping

Este é um projeto de webscraping que tem como objetivo extrair informações sobre filmes de terror do site IMDB. O projeto utiliza a biblioteca Puppeteer para navegar pelo site e extrair as informações necessárias.
**Importante: Apenas para propósitos educacionais**


### O que o projeto faz?

O projeto consiste em dois scripts principais:

1. `criar-top100.js`: Este script navega até a página de filmes de terror do IMDB, extrai informações sobre os 100 principais filmes e salva essas informações em um arquivo chamado `filmes-terror.txt`. As informações extraídas incluem o título do filme, a data de lançamento, a duração e a pontuação no Metacritic.

2. `escolher-filme.js`: Este script lê o arquivo `filmes-terror.txt`, seleciona um filme aleatoriamente e imprime as informações desse filme no console.

### Como usar?

Para usar este projeto, siga os passos abaixo:

1. Clone o repositório para a sua máquina local usando o comando `git clone <URL_DO_REPOSITORIO>`.

2. Navegue até a pasta do projeto usando o comando `cd <NOME_DA_PASTA_DO_PROJETO>`.

3. Instale as dependências necessárias com o comando `npm install`. Este comando lê o arquivo `package.json` no diretório atual e instala todas as dependências listadas nele. As dependências serão instaladas na pasta `node_modules`, que é automaticamente criada se não existir.

4. Execute o script `criar-top100.js` com o comando `node criar-top100.js`. Isso irá gerar o arquivo `filmes-terror.txt` com as informações dos 100 principais filmes de terror.

5. Execute o script `escolher-filme.js` com o comando `node escolher-filme.js`. Isso irá selecionar um filme aleatoriamente e imprimir as informações desse filme no console.

Por favor, note que você precisa ter o Node.js e o npm (Node Package Manager) instalados na sua máquina para executar os scripts. Se você ainda não os tem, você pode baixá-los [aqui](https://nodejs.org/).

### Contribuindo

Sinta-se à vontade para enviar pull requests.

## Licença

Este projeto está licenciado sob a [GNU General Public License](https://opensource.org/licenses/GPL-3.0).
