
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Pincode', function () {
console.log('mongodb connected')
})
module.exports = mongoose
