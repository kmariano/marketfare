/**
 * Module dependencies.
 */

var express = require('express')
  , application_root = __dirname
  , routes = require('./routes')
  , request = require('request')
  , ejs    = require('ejs')
  , market = require('./routes/market')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(application_root, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function( req, res){

   res.sendfile(__dirname + '/public/views/main.html');
});

app.post('/market/find', market.search );
app.get('/season/products', market.getSeasonalProducts);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
