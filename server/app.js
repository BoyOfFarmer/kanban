var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var listRouter=require('./routes/list')
var addColumn=require('./routes/addColumn')
var deleteColumn=require('./routes/deleteColumn')
var addMany=require('./routes/addManyColumn')
var updateColumn=require('./routes/updateColumn')
var addTask=require('./routes/addTask')
var updateTask=require('./routes/updateTask')
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://vanlong:vanlong123@ds333768.mlab.com:33768/kanban', {useNewUrlParser: true});
// view engine setup
var bodyParser = require('body-parser')

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', '*');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', '*');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/list',listRouter)
app.use('/addColumn',addColumn)
app.use('/deleteColumn',deleteColumn)
app.use('/addManyColumn',addMany)
app.use('/updateColumn',updateColumn)
app.use('/addTask',addTask)
app.use('/updateTask',updateTask)
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
