var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var produtosRouter = require('./routes/produtos');
var categoriaRouter = require('./routes/categoria')
var imagemRouter = require('./routes/imagens')
var cors = require('cors')

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/files", express.static(path.resolve(__dirname, 'public','images')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/produtos', produtosRouter);
app.use('/categoria', categoriaRouter);

module.exports = app;
