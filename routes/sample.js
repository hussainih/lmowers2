var express = require('express');
var router = express.Router();
var path = require('path');
var result = require( path.resolve( __dirname, "./ads.js" ) );
/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(result.readAds());
    res.send(result.readAds());
});

module.exports = router;