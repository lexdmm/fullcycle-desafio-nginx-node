# Fullcycle

### Utilizando nginx como proxy reverso. 
Quando um usuário acessar o nginx, ele fará uma chamada na aplicação node.js. Essa aplicação vai adicionar um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

Gerar o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Também criar um volume para para o ambiente de desenvolvimento. 

* A linguagem de programação para este desafio é Node/JavaScript.

O retorno da aplicação para o nginx deve ser:

1 - <h1>Full Cycle Rocks!</h1>

2 - Lista de nomes cadastrada no banco de dados.


### Para rodar
<pre>
docker compose up -d
</pre>

### Para destruir os containers
<pre>
docker compose down
</pre>