const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtsSchema = new Schema ({
    thoughtText: {
        type: String,
        required: 'Thoughts are Required',
        minlength: 1,
        maxlength: 280
        
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    }
});

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;