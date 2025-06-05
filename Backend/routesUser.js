const express = require('express');
const router = express.Router();
 const autenticarToken = require('./authMiddleware');
const autorizarNivel = require('./autorizarNivel');
const ctrlUser = require('./controllersUser.js');

router.post('/register', ctrlUser.registrarUsuario);
router.post('/login', ctrlUser.loginUsuario);
router.get('/usuarios/:nivel', autorizarNivel(2), ctrlUser.listarUsuariosPorNivel);
router.put('/usuarios/:id', autorizarNivel(2), ctrlUser.promoverUsuario);

module.exports = router;
