const data = require('../data/data.json')

class dataJSON {
    static async getDataJSON(req, res){
      try {
        if(data){
          res.status(200).json(data)
        }else{
          res.status(400).json({message:"Data Not Found!"});
        }
      } catch (error) {
        res.status(500).json(error);
      }
    }
  }
  
  module.exports = dataJSON;