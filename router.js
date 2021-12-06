var express = require('express');
var router = express.Router();



router.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

router.get('/post1', (req, res) => res.sendFile(path.join(__dirname, '/public/post1.html')))



module.exports = router;