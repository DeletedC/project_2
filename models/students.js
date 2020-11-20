const {Schema, model} = require('mongoose');

const studentSchema = new Schema ({
    nameFirst: {type: String, required: true},
    nameLast: {type: String,required: true},
    img: {type: String},
    book: {type: String},
    level: {type: String},
    notes: {type: String}
});

module.exports = model('Student', studentSchema);