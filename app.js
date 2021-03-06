// include and setup express
var express = require('express');
var bodyParser = require('body-parser');

//mogoose
var mongoose = require('mongoose');

//connect to MongoDB
mongoose.connect('mongodb://localhost/epam');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title : String,
    url : String,
    image : String,
    username : String,
    date : Date
});

mongoose.model('Article', ArticleSchema);
var article = mongoose.model('Article');


// include express handlebars (templating engine)
var exphbs  = require('express-handlebars');

// specify the layout for our handlebars template
var hbs = exphbs.create({defaultLayout: 'main'});

// crethe the express app
var app = express();

var api = require('./routes/api');

app.use(function (req, res, next) {
 res.locals.scripts = [];
 next();
});


// setup handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// express middleware that parser the key-value pairs sent in the request body in the format of our choosing (e.g. json)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// setup our public directory (which will serve any file stored in the 'public' directory)
app.use(express.static('public'));

// respond to the get request with the home page
app.get('/', function (req, res) {
    res.render('home');
});

// respond to the get request with the about page
app.get('/about', function(req, res) {
  res.render('about');
});

// respond to the get request with the register page
app.get('/register', function(req, res) {
  res.render('register');
});

// handle the posted registration data
app.post('/register', function(req, res) {

  // get the data out of the request (req) object
  // store the user in memory here

  res.redirect('/dashboard');
});


app.get('/article/:id', function(req, res) {
  res.locals.scripts.push('/js/showEachArticles.js');
    res.render('article');
});


// respond to the get request with dashboard page (and pass in some data into the template / note this will be rendered server-side)
app.get('/dashboard', function (req, res) {
    res.locals.scripts.push('/js/dashboard.js');
      res.render('dashboard', {
    	stuff: [{
		    greeting: "Hello",
		    subject: "World!"
		}]
    });
});

app.post('/dashboard', function (req, res, next) {

})
// the api (note that typically you would likely organize things a little differently to this)
app.use('/api', api);

// create the server based on express
var server = require('http').createServer(app);

// start the server
server.listen(1337, '127.0.0.1', function () {
  console.log('The Next XYZ is looking good! Open http://localhost:%d to begin.', 1337);
});