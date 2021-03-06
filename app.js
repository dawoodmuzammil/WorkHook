const env = require('dotenv').config();

var createError     =   require('http-errors');
var express         =   require('express');
var path            =   require('path');
var cookieParser    =   require('cookie-parser');
var logger          =   require('morgan');
const mongoose      =   require('mongoose');
const bodyParser    =   require("body-parser");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jobsRouter  = require('./routes/jobs');
var corporateRouter  = require('./routes/corporate');

var app = express();

// for BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// connect to the database
// mongoose.connect(process.env.MONGO_URI, {     
mongoose.connect(process.env.workhook_mongo_uri, {     

    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas!');
}).catch(err => {
    // console.log(process.env.MONGO_URI);
    console.log('ERROR:', err.message);
});
// mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/jobs', jobsRouter);
app.use('/corporate', corporateRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      console.error(err.stack);
      res.json({
        message : err.message,
        error   : err
      });
    });
  }
module.exports = app;
