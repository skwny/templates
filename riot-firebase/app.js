////////////////////////////////////////////////////////////////////////////////
// CREATE ROOT PATH ACCESS W/ 'include'; var thing = include(root/relative/path)
global.base_dir = __dirname;
global.abs_path = function(path) {
    return base_dir + path;
};
global.include = function(file) {
    return require(abs_path('/' + file));
};
///////////////////////////////////////////////////////////////////////////////
// DEPENDENCIES
// root is for app-wide use
root.express = require('express');
root.riot = require('riot');
var bodyParser = require('body-parser');

// START APP
var app = express();
app.set('port', 3000);

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// ROUTE CONTROLLER
app.use(require('./routes/index'));

// SERVER
app.listen(app.get('port'), function (){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
  });
///////////////////////////////////////////////////////////////////////////////
// MISC STUFF FOR REFERENCE
app.get('/', function(req, res, next){
});

app.get('/',function(req,res) {
  var context = {};
  var id;
  for (var p in req.query) {
    if (p == "id")
      id = req.query[p];
  }
});

app.post('/', function(req, res, next) {
  if(req.body['thing']){}
  if(req.body['otherThing']) {
    if (err)
      next(err);
  }
});
///////////////////////////////////////////////////////////////////////////////
module.exports = app;
