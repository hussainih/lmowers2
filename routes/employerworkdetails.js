/**
 * Created by moham on 14-May-17.
 */
var express = require('express');
var router = express.Router();
var result = require('./ads');
var mysql = require('mysql');
/* GET home page. */
router.get('/', function(req, res, next) {


            res.render('employer-work-details', { "some":"thing"});


});

module.exports = router;
