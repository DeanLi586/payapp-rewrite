const mongoose = require('mongoose');

const {
    Schema
} = mongoose;

const AccountSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ownerID: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    provider: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Accounts', AccountSchema);