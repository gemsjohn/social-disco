const { Users } = require('../models');

const usersController = {
    // get all users
    getAllUsers(req, res) {
        Users.find({})
            .then(dbUsersData => res.json(dbUsersData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
}

module.exports = usersController;