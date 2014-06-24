var express               = require('express')
  , http                  = require('http')
  , path                  = require('path')
  , expressLess           = require('express-less')
  , browserify            = require('browserify-middleware')
  , routes                = require('./routes')

browserify.settings({
  debug: true,
  transform: ['reactify', 'debowerify']
})

var app = express()

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

app.use('/css', expressLess(path.join(__dirname, 'assets', 'less')))
app.use('/bootstrap.js', browserify(path.join(__dirname, 'assets', 'jsx', 'bootstrap.jsx')))
app.use('/fonts', express.static(path.join(__dirname, 'assets','components','font-awesome','fonts')))

app.use(express.errorHandler());

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
