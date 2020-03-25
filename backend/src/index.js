const express = require('express'); // pacote que contem todas as funcionalidades do express
const cors = require('cors');
const routes = require('./routes.js'); // arquivo

const app = express();

app.use(cors());
app.use(express.json()) // converter o json em um objeto javascript via express
app.use(routes);

app.listen(3333); 