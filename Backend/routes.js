const express = require('express');
const router = express.Router();
const ctrl = require('./controllers');

router.get('/', (req, res) => res.send('API funcionando'));

router.get('/produtos', ctrl.listarProdutos);
router.post('/produtos', ctrl.criarProduto);
router.put('/produtos/:id', ctrl.atualizarProduto);
router.delete('/produtos/:id', ctrl.deletarProduto);

module.exports = router;
