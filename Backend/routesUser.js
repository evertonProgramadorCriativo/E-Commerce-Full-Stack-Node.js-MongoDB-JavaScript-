const express = require('express');
const router = express.Router();
const ctrlUser = require('./controllersUser');

router.post('/register', ctrlUser.registrarUsuario);
router.post('/login', ctrlUser.loginUsuario);

module.exports = router;
