# ReactJS e Node.js MVC
MVC com ReactJS, nodejs com autenticação e proteção das páginas do Dashboard

```bash
$ mkdir backend
$ cd backend
$ npm init -y
$ npm install express dotenv mongoose bcrypt jsonwebtoken cors nodemon
```

* - Pastas *
```bash
backend/
|-- .env
|-- index.js
|-- models/
|   |-- User.js
|-- routes/
|   |-- auth.js
```

* - Config do prettier

- https://www.youtube.com/watch?v=vFByu7-f858

* - Comandos do terminal do mongoDB*
```bash
$ mongosh //start o console do mongo
$ show dbs
$ use nome-do-banco //Isso que cria o banco de dados
$ show collections
$ db.createCollection("nome-da-coleção") //exemplo users, posts, categories, na database Blog
```

