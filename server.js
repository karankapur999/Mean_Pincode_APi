var express = require('express')
var bodyParser = require('body-parser')
var Post = require('./models/post')

var app = express()
app.use(bodyParser.json())



app.get('/api/posts/getPincodeData/', function (req, res, next) {

var url = require('url');
var pincode = url.parse(req.url, true).query['pincode'];
var statename=url.parse(req.url, true).query['state'];
console.log(pincode + statename);
if(pincode && statename)
Post.find({ pincode: +pincode,statename:{$regex:statename, $options:'i'} }, function (err, docs) {
            res.json(docs);
        });
else if(pincode)
  Post.find({ pincode: +pincode }, function (err, docs) {
            res.json(docs);
             });
             
             
             else if(statename)
  Post.find({ statename:{$regex:statename, $options:'i'} }, function (err, docs) {
            res.json(docs);
             });

})


app.get('/api/posts/pincode/:id', function (req, res, next) {

if (req.params.id) {
        Post.find({ pincode: +req.params.id }, function (err, docs) {
            res.json(docs);
        });
        
    }
    
    
})


app.get('/api/posts/pincode/:id/:statename', function (req, res, next) {
if (req.params.id && req.params.statename ) {
        Post.find({ pincode: +req.params.id,statename:{$regex:req.params.statename, $options:'i'} }, function (err, docs) {
            res.json(docs);
        });
        
    }
})
app.post('/api/posts', function (req, res, next) {
  var post = new Post({
    username: req.body.username,
    body: req.body.body
  })
  post.save(function (err, post) {
    if (err) { return next(err) }
    res.json(201, post)
  })
})

app.listen(3000, function () {
console.log('Server listening on', 3000)
})

