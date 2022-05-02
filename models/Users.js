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
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Users'
        }
    ]
},
{
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
}
);

UsersSchema.virtual('thoughtsCount').get(function() {
    return this.thoughts.reduce(
      (total, thought) => total + thought.reactions.length + 1,
      0
    );
});
UsersSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const Users = model('Users', UsersSchema);

module.exports = Users;