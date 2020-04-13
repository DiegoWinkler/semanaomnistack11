/**
 * Métodos HTTP:
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar/cadastrar uma informação do back-end
 * PUT: Alterar uma informação do back-end
 * DELETE: Deletar uma informação do back-end
 */
 /**
  * Tipos de parametros:
  * 
  * Query Params: Parametros nomeados enviados na rota após "?" (filtros, paginação)
  * Route Params: Parametros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  * 
  */
/**
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 * 
 */
/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// se online
//app.use(cors({
//   origin: 'http://meuapp.com'
// }));

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
