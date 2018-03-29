const mongoose = require('mongoose');
const userProfileSchema = new mongoose.Schema({
    'customer_id':{
        type: String,
        required: true
    },
    'first_name':{
        type: String
    },
    'last_name':{
        type: String
    },
    'email_id':{
        type: String
    },
    'password':{
        type: String
    },
    'phone_number':{
        type: Number
    }
});

function userProfileModel() {
    if (mongoose.models && mongoose.models.user_profiles) {
        return mongoose.models.user_profiles;
    } else {
        return mongoose.model('user_profiles', userProfileSchema);
    }
}

module.exports = userProfileModel();