var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');
// application uses ExpressJS
var app = express();

// engine for handlebars views integration
app.engine('handlebars', handlebars({defaultLayout: 'main_logo'}));
app.set('view engine', 'handlebars');

// directory resource
app.use(express.static(__dirname + '/public'));
// json and url resources
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// index page for all navigation routes
var routes = require('./items_routes/index');
app.use('/', routes);
// view to render in event of 404 error
app.use(function(req, res) {
    res.status(404);
    res.render('pageNotFound');
});
// port of localhost to application to use
app.listen(3000, function(){
  console.log('http://localhost:3000');
});

// Source: 
// Bachoti, Praveen. CS602_HW3_Bachoti. METCS602. Boston University, 15 August, 2022.