var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
process.env.SECRET_KEY = "secretkey";


var jwt = require('jsonwebtoken');
var index = require('./routes/index');
var users = require('./routes/users');
var authenticate = require('./routes/authenticate');
var register = require('./routes/register');
var employerworkdetails = require('./routes/employerworkdetails');
var sample = require('./routes/sample');
var app = express();
var secureRoutes = express.Router();
var checkToken = require('./routes/checkToken');
var ads = require('./routes/ads');
var readAds = require('./routes/readAds');
var readLmower1 = require('./routes/readLmower1');

var cors = require('cors')

var app = express()
app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/secure', secureRoutes);

app.use('/', index);
app.use('/users', users);
app.use('/authenticate',authenticate);
app.use('/register', register );
app.use('/employerworkdetails', employerworkdetails);
app.use('/sample', sample);
app.use('/checkToken', checkToken);
app.use('/readlmower1', readLmower1);
secureRoutes.use(function(req, res, next){
  var token = req.body.token || req.headers['token'];
  if(token){
    console.log("the TOken is" +token);
    jwt.verify(token,process.env.SECRET_KEY, function(err, decode){
      if(err){

        res.status(500).send("Invalid Token");
      } else{
        next();
      }
    })


  }else{
    res.send("Please login first, no token received");
  }

});

secureRoutes.post('/createAds', ads.createAds)
secureRoutes.post('/readAds', ads.readAds);

secureRoutes.delete('/deleteAds', ads.deleteAds);
secureRoutes.post('/updateAds',ads.updateAds);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
