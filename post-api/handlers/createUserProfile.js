const express = require('express');
const app = express();
const UserProfileService = require('../services/createUserProfileService');
const _ = require('lodash');

const createUserProfile = function(event, context, callback){
    var request = event.body;
    console.log(request);
    request = _.isObject(request) ? request : JSON.parse(request);
    const userProfileService = new UserProfileService(request);
    userProfileService.createProfile(request, function(error, result){
        if(error) return callback(error);
        else{
            console.log('222');
            return callback(null, result);
        }
    });
}

const logging = function(event, context, callback){
    var request = event.body;
    console.log(request);
    request = _.isObject(request) ? request : JSON.parse(request);
    const userProfileService = new UserProfileService(request);
    userProfileService.getProfile(request, function(error, result){
        if(error) return callback(error);
        else{
            console.log('222');
            console.log(result);
            return callback(null, {'status':'success'});
        }
    });
}

module.exports = {
    createUserProfile:createUserProfile,
    logging
}