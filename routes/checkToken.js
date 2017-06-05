/**
 * Created by moham on 14-May-17.
 */
/**
 * Created by moham on 14-May-17.
 */
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* GET home page. */
router.post('/', function(req, res, next) {

     token = req.body.token || req.headers['token'];
    console.log("The token is ", token);
    if(token){
        jwt.verify(token, process.env.SECRET_KEY, function(err, decode){
            if(err){
                res.json({
                    success: false,
                    validated: "no"
                })
            }else{
                res.json({
                    success: true,
                    validated: "yes"
                })
            }
        });

    } else {
        res.json({
            success:"please send a token"
        });
    }

});

module.exports = router;