const { Schema, model } = require('mongoose');

const UsersSchema = new Schema ({
    userName: {
        type: String
    }
});

const Users = model('Users', UsersSchema);

module.exports = Users;