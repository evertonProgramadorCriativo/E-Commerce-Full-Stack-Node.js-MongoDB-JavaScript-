const express = require('express');
const router = express.Router();
const ctrl = require('./controllers');

router.get('/produtos', ctrl.listarProdutos);
router.post('/createprodutos', ctrl.criarProduto);
router.put('/produtos/:id', ctrl.atualizarProduto);
router.delete('/deleteprodutos/:id', ctrl.deletarProduto);


module.exports = router;
