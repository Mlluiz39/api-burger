COMO RODAR O PROJETO BAIXADO
Instalar todas as dependências indicadas no package.json
### npm i -y / yarn init -y

Rodar o projeto usando nodemon
### npm start 

Neste projeto foi utilizado apenas EXPRESS e NODEMON como módulos externos
para criar ID dinamicamente foi utilizado o randomUUID() do core module do NODE
ou seja foi utilizado o modulo interno crypto que esta disponível a partir do node 15.x
caso queira instalar em outro projetos.
### basta importar com `const { randomUUID } = require('crypto')`

# api-burger
# api-burger
