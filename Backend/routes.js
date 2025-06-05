const express = require('express');
const router = express.Router();
const ctrl = require('./controllers');
const autenticarToken = require('./authMiddleware');

router.get('/produtos', ctrl.listarProdutos);
router.post('/createprodutos', autenticarToken, ctrl.criarProduto);
router.put('/produtos/:id', autenticarToken, ctrl.atualizarProduto);
router.delete('/deleteprodutos/:id',  autenticarToken, ctrl.deletarProduto);


module.exports = router;
