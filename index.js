var express = require('express'),
  app = express(),
  port = 3000,
  mongoose = require('mongoose');
  // Task = require('./api/models/models');
  bodyParser = require('body-parser');
  
mongoose.connect('mongodb://localhost:27017/sch_DB', function(error,data){
	if(error){
		throw error;
  }
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./post-api/routes/route');
routes(app);
app.listen(port);
console.log('REST API server started on: ' + port);