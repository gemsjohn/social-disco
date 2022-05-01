const { Schema, model } = require('mongoose');

const UsersSchema = new Schema ({
    userName: {
        type: String,
        unique: true,
        trim: true,
        required: 'Username is Required'
        
    },
    email: {
        type: String,
        unique: true,
        required: 'Email is Required',
        match: [/.+@.+\..+/]
    }
});

const Users = model('Users', UsersSchema);

module.exports = Users;