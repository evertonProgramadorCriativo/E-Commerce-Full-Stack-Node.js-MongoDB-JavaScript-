const jwt = require('jsonwebtoken');

require('dotenv').config();
const SECRET = process.env.JWT_SECRET;


function autenticarToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ mensagem: 'Token não fornecido!' });

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).json({ mensagem: 'Token inválido!' });
    
    req.user = user;
    next();
  });
}

module.exports = autenticarToken;
