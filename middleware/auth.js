const user = require('../data/user.json')
const jwt = require('jsonwebtoken')

async function authentication (req, res, next) {
    try {
      const token = req.headers.authorization;
      const verif = jwt.verify(token, "SECRET");
      req.userData = verif;
      next();
  
    } catch (error) {
      res.status(400).json(error)
    }
  }
  
  module.exports = authentication;