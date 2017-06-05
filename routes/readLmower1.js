var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('readlmowers1', { title: 'Express' });

});

module.exports = router;
/**
 * Created by moham on 05-Jun-17.
 */
