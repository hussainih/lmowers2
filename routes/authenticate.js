/**
 * Created by moham on 14-May-17.
 */
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var mysql = require('mysql');




/* GET home page. */
router.post('/', function(req, res, next) {

    console.log("body?" +req.body.email);
    console.log("body?" +req.body.password);
    if (req.body.email && req.body.password) {
        var email = req.body.email;// "Mohammad.H.Hussaini@student.fh-kiel.de";
        var pass = req.body.password;//"dell";

        console.log('you are inside');
        var sql = "select * from lmower.users where email = '" + email + "' AND password = '" + pass + "';";

        var con = mysql.createConnection({
            host: "35.189.237.219",
            user: "root",
            password: "lmowerpassword"
        });



        con.connect(function (err) {
            if (err) throw err;
            console.log("connected");
            con.query(sql, function (err, result) {
            console.log(result);
                if (result.length==1) {
                    res.json({ //send token if mysql returns result
                        success: true,
                        token: token
                    })
                }

                else {
                    res.json({ //send authentication failure message
                        success: false,
                        token: "authentication failed"
                    })
                }
               // if (err) throw err;

                console.log("Result: " + result);
            })
        })



        var user = {
            email: email

        }
        //generate token
        var token = jwt.sign(user, process.env.SECRET_KEY, {
            expiresIn: 4000
        });



        //con.end(); //close mysql connection
    } else{
        res.json({ //send authentication failure message
            success: false,
            token: "authentication failed"
        })
    }


});

module.exports = router;
