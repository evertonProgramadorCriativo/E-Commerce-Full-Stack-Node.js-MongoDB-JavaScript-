const Usuario = require('./models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

 
const SECRET = 'dsdlskakldsjaildsaldjsajdlsajdiasjdldsa';

exports.registrarUsuario = async (req, res) => {
  const { usuario, senha, nivel } = req.body;

  const senhaHash = await bcrypt.hash(senha, 10);

  const novoUsuario = new Usuario({
    usuario,
    senha: senhaHash,
    nivel: nivel || 0  // ✅ padrão para usuário comum, mas pode criar admin
  });

  await novoUsuario.save();

  res.json({ mensagem: 'Usuário registrado com sucesso!' });
};


exports.listarUsuariosPorNivel = async (req, res) => {
  const { nivel } = req.params;

  const usuarios = await Usuario.find({ nivel: Number(nivel) }, 'usuario nivel');

  res.json(usuarios);
};

exports.loginUsuario = async (req, res) => {
  const { usuario, senha } = req.body;

  const user = await Usuario.findOne({ usuario });
  
  if (!user) {
    return res.status(400).json({ mensagem: 'Usuário não encontrado!' });
  }

  const senhaValida = await bcrypt.compare(senha, user.senha);
  
  if (!senhaValida) {
    return res.status(400).json({ mensagem: 'Senha inválida!' });
  }

 
 const token = jwt.sign(
  { id: user._id, nivel: user.nivel }, 
  SECRET, 
  { expiresIn: '1h' }
);

  res.json({ mensagem: 'Login realizado com sucesso!', token });
};


exports.deletarUsuario = async (req, res) => {
  const { id } = req.params;

  const usuario = await Usuario.findByIdAndDelete(id);

  if (!usuario) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado!' });
  }

  res.json({ mensagem: 'Usuário deletado com sucesso!' });
};


exports.promoverUsuario = async (req, res) => {
  const { id } = req.params;
  const { nivel } = req.body;

  const usuario = await Usuario.findById(id);
  if (!usuario) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }

  usuario.nivel = nivel;

  await usuario.save();

  res.json({ mensagem: 'Usuário promovido com sucesso!', usuario });
};
