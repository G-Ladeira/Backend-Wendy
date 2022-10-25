const jwt = require('jsonwebtoken')

function checkToken(req, res, next) {
    const authBody = req.body["authorization"];
    const token = authBody //&& authBody.split(" ")[1];
  console.log(token)
  console.log(authBody)
    if (!token) return res.status(401).json({ msg: "Acesso negado!" });
  
    try {
      const secret = 'XABLAU';
  
      jwt.verify(token, secret);
  
      next();
    } catch (err) {
      res.status(400).json({ msg: "O Token é inválido!" });
    }
  }

  module.exports = checkToken