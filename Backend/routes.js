const express = require('express');
const router = express.Router();
const ctrl = require('./controllers');
const ctrlUser = require('./controllersUser');
const autenticarToken = require('./authMiddleware');
const autorizarNivel = require('./autorizarNivel');

// Rotas públicas
router.get('/produtos', ctrl.listarProdutos);

// Rotas apenas autenticadas
router.get('/perfil', autenticarToken, ctrl.verPerfil);

// Rotas apenas para Admin Nível 1 ou superior
router.post('/createprodutos', autorizarNivel(1), ctrl.criarProduto);
router.put('/produtos/:id', autorizarNivel(1), ctrl.atualizarProduto);
router.delete('/deleteprodutos/:id', autorizarNivel(1), ctrl.deletarProduto);

// Rotas apenas para Super Admin
router.post('/createadmin', autorizarNivel(2), ctrlUser.registrarUsuario);
router.delete('/deleteadmin/:id', autorizarNivel(2), ctrlUser.deletarUsuario);

module.exports = router;
