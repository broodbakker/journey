var express = require('express');
var router = express.Router();



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});
router.get('/post1', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/post1.html'));
});



module.exports = router;