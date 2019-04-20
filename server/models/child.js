const mongoose = require('mongoose');

const {Schema} = mongoose;

const ChildSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    parentId: {
        type: String,
        required: true,
    },
    schoolId: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    class: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Child', ChildSchema);