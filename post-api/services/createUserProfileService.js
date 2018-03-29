const userProfileModel = require('../models/createUserProfileModel');


class UserProfileService {
    constructor(req) {
        // this.logger = logger;
        // this.lang = lang;
        // this.validator = new Validator(logger, lang);
    }


    createProfile(inputJson, callback){
        userProfileModel.create(inputJson, function(error, doc){
            if(error) return callback(error);
            console.log(doc);
            return callback(null, doc);
        });
    }

    getProfile(inputJson, callback){
        const query = {
            email_id: inputJson.email_id,
            password: inputJson.password
        };
        userProfileModel.findOne(query, function(error, doc){
            if(error) return callback(error);
            if(!doc) return callback(null, 'No User Exists');
            else return callback(null, doc);
        });
    }

}

module.exports = UserProfileService;