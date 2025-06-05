function autorizarNivel(nivelRequerido) {
  return (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).json({ mensagem: 'Token não fornecido!' });

    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) return res.status(403).json({ mensagem: 'Token inválido!' });

      if (decoded.nivel < nivelRequerido) {
        return res.status(403).json({ mensagem: 'Permissão negada!' });
      }

      req.user = decoded;
      next();
    });
  };
}

module.exports = autorizarNivel;
