const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  preco: Number
});

module.exports = mongoose.model('Produto', ProdutoSchema);
