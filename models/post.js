var db = require('../db')

var BlogPost= db.Schema({
 pincode: Number
  });

var master_data = db.model('master_data',BlogPost,'master_data')
module.exports = master_data	

