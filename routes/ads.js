/**
 * Created by moham on 15-May-17.
 */
/**
 * Created by moham on 14-May-17.
 */
/**
 * Created by moham on 14-May-17.
 */
var express = require('express');

var mysql = require('mysql');


/* GET home page. */
module.exports.createAds = function(req, res, next){
    var sql = "INSERT INTO lmower.ads(`employeerId`, `Area`, `grassHeight`, `payAmount`, `availableFrom`, `availableTo` )" +
    "VALUES ("+ req.body.employeerId +","  +req.body.Area +",'" + req.body.grassHeight +"',"
        + req.body.payAmount+",'" + req.body.availableFrom+"','" + req.body.availableTo+"');";
    console.log(sql);

    if (req.body.Area && req.body.payAmount) {
        var con = mysql.createConnection({
            host: "35.189.237.219",
            user: "root",
            password: "lmowerpassword"
        });


        con.connect(function (err) {
            if (err) throw err;
            console.log("connected");
            con.query(sql, function (err, result) {
                if (err) throw err;
                res.json("done");

            });
        });
    }
}

module.exports.deleteAds = function(req, res, next){
    var sql = "delete from lmower.ads where lmower.ads.id = " + req.body.id + ";";
    if (req.body.Area && req.body.payAmount) {
        var con = mysql.createConnection({
            host: "35.189.237.219",
            user: "root",
            password: "lmowerpassword"
        });


        con.connect(function (err) {
            if (err) throw err;
            console.log("connected");
            con.query(sql, function (err, result) {
                if (err) throw err;
                res.json("done");

            });
        });
    }
}

module.exports.updateAds = function(req, res, next){
    console.log("This the Item"+ req.body.Area);
    var sql = "update lmower.ads set lmower.ads.Area = " +req.body.Area +" where lmower.ads.id=" + req.body.id + ";" ;


        var con = mysql.createConnection({
            host: "35.189.237.219",
            user: "root",
            password: "lmowerpassword"
        });


        con.connect(function (err) {
            if (err) throw err;
            console.log("connected update");
            con.query(sql, function (err, result) {
                if (err) throw err;
                res.json("data");
            });
        });

}

module.exports.readAds = function(req, res, next){
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

}


