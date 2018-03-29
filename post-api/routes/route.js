var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var jwt = require('express-jwt');
// var auth = jwt({
//   secret: 'MY_SECRET',
//   userProperty: 'payload'
// });
// mongoose.connect('mongodb://localhost:27017', function(error,data){
// 	if(error){
// 		throw error;
// 	}
// });



module.exports = function (router) {
    var createService = require('../handlers/createUserProfile');
    router.post('/customer/create', createService.createUserProfile);
    router.post('/customer/login',createService.logging);
};