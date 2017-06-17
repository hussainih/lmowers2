/**
 * Created by moham on 16-Jun-17.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    for(  a=0; a<=100000; a++){
        for(b =1; b<=10000;b++){
            c=99*a;

        }

    }
    res.render('index', { title: 'Express' });
});

module.exports = router;
