const Produto = require('./models');

exports.listarProdutos = async (req, res) => {
  const produtos = await Produto.find();
  res.json(produtos);
};

exports.criarProduto = async (req, res) => {
  const produto = new Produto(req.body);
  await produto.save();
  res.json(produto);
};

exports.atualizarProduto = async (req, res) => {
  const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(produto);
};

exports.deletarProduto = async (req, res) => {
  await Produto.findByIdAndDelete(req.params.id);
  res.json({ mensagem: 'Produto deletado' });
};
