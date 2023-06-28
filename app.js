var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var moment= require('moment');

var myenv = require("./env.js");
process.env=Object.assign({}, process.env , myenv[process.env.MODE])

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aigcRouter = require('./routes/aigc');

const { createProxyMiddleware } = require('http-proxy-middleware');//引入代理中间件
var app = express();
var apiProxy = createProxyMiddleware('/api', { target: 'http://account.tsatest.cn',changeOrigin: true });//将服务器代理到该地址


//var swig = require('swig');
// app.set('view cache', false);
// //摸板引擎存放目录的关键字，固定字段
// //实际存在的目录。
// app.set('views', path.join(__dirname, 'views'));
// //注册摸板引擎，固定字段
// app.set('view engine','html');
// app.engine('html',swig.renderFile);
// //关闭swig缓存,缓存的目的也是提高node服务器的响应速度
// swig.setDefaults({cache:false});

// 注入全局方法
app.locals.myDateFormat = function(date){
  return moment(date).format('YYYY-MM-DD');
};


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/api/*', apiProxy);//api子目录下的都是用代理
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //设置静态资源目录

app.use((req, res, next)=> {
  console.log(req.cookies.access_token);
  global.access_token=req.cookies.access_token;
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/aigc',aigcRouter);

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
