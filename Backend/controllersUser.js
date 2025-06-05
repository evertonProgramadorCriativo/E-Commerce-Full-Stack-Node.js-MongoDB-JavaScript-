const Usuario = require('./models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

 
const SECRET = 'dsdlskakldsjaildsaldjsajdlsajdiasjdldsa';

exports.registrarUsuario = async (req, res) => {
  const { usuario, senha } = req.body;

  const senhaHash = await bcrypt.hash(senha, 10);
  
  const novoUsuario = new Usuario({ usuario, senha: senhaHash });
  
  await novoUsuario.save();

  res.json({ mensagem: 'Usuário registrado com sucesso!' });
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

 
  const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: '1h' });

  res.json({ mensagem: 'Login realizado com sucesso!', token });
};
