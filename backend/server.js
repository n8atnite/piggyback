require('dotenv').config();

const path = require('path')
const logger = require('morgan');
const express = require('express');
const createError = require('http-errors');
const stripe = require('stripe')(process.env.STRIPE_KEY_SERVER);

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const configRouter = require('./routes/configuration');
app.use('/config', configRouter);

const checkoutRouter = require('./routes/checkout');
app.use('/checkout-session', checkoutRouter);

const checkoutCreatorRouter = require('./routes/createCheckout');
app.use('/create-checkout-session', checkoutCreatorRouter);

const webhookRouter = require('./routes/webhook');
app.use('/webhook', webhookRouter);


/*
* live reload setup
*/
const liveReload = require("livereload");
const liveReloadServer = liveReload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
const connectLiveReload = require("connect-livereload");
app.use(connectLiveReload());

/*
* verify webhook signatures
*/
app.use(
  express.json({
    verify: function (req, res, buf) {
      if (req.originalUrl.startsWith('/webhook')) {
        req.rawBody = buf.toString();
      }
    },
  })
);

/*
* catch favicon.ico request and throw 204
*/
app.use(function(req, res, next) {
  if (req.originalUrl && req.originalUrl.split("/").pop() === 'favicon.ico') {
    return res.sendStatus(204);
  }
    return next();
});

/*
* catch 404 and forward to error handler
*/ 
app.use(function(req, res, next) {
    next(createError(404));
});

/*
* error handler
*/ 
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
});

module.exports = app;