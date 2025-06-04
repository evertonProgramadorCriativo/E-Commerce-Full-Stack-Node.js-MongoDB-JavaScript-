const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb+srv://evertonprogramadorcriativo:roqiAePQ0uVsYPNr@cluster0.wjlt5r6.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado com sucesso'))
.catch(err => console.error('Erro ao conectar no MongoDB:', err));

app.use(cors());
app.use(express.json());

 
const routesProdutos = require('./routes');
const routesUser = require('./routesUser');

app.use('/api', routesProdutos);
app.use('/api', routesUser);


app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
