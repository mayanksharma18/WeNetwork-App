var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var LoginRouter = require('./routes/Login');
var RegisterRouter = require('./routes/register');

const db=require('./models')
//-----------------------------
const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const flash        = require("connect-flash")

const session = require("express-session")
// // PASSPORT CONFIGURATION


// Configure passport-local to use account model for authentication

passport.use(new LocalStrategy(db.Register.authenticate()));
passport.serializeUser(db.Register.serializeUser());
passport.deserializeUser(db.Register.deserializeUser());

// view engine setup
var ejs=require('ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
// app.use('/', LoginRouter);

app.use('/register', RegisterRouter);

app.use('/login',LoginRouter)




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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




