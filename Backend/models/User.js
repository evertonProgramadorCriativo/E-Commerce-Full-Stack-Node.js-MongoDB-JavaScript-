const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  usuario: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  nivel: { type: Number, default: 0 }  // 0 = usuário normal, 1 = admin, 2 = super admin
});


module.exports = mongoose.model('Usuario', UsuarioSchema);