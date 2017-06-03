var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var mysql = require('mysql');



router.get('/', function(req, res, next) {
    var sql = "select * from lmower.ads";

    var con = mysql.createConnection({
        host: "35.189.237.219",
        user: "root",
        password: "lmowerpassword"
    });



    con.connect(function (err) {
        if (err) throw err;
        console.log("connected");
        con.query(sql, function (err, result) {
        if(err) throw err;
            res.json(result);
        });
    });

});
module.exports = router;