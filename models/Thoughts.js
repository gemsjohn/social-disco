const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
          getters: true
        }
    }
);

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
    },
    username: {
        type: String,
        required: true
    },
    reactions: [ReactionSchema],
    usersId: {
        type: String,
        required: true
    }
},
{
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
}
);

ThoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;