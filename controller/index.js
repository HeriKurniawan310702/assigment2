const jwt = require('jsonwebtoken')
const user = require('../data/user.json')

class login {
    static async userLogin (req, res){
      const { username, password } = req.body;
      try {
        const dataUser = user;
  
        if(dataUser){
          const token = jwt.sign({
            username: dataUser.username,
          }, "RAHASIA");
  
          const compareUsername = username === dataUser.username;
          const comparePassword = password === dataUser.password;
  
          if(comparePassword && compareUsername){
            res.status(200).json({token:token})
          }else{
            res.status(400).json({message:"User Not Found!"})
          }
        }else{
          res.status(500).json({message:"BAD REQUEST"});
        }
      } catch (error) {
        res.status(400).json(error)
      }
    }
  }
  module.exports = login;