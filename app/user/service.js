const User = require('../models/user.model');

const users = {
    getUsers: async () => {
        let result = await User.find().exec();

        if (result == null) {
            return "nodata";
        }
        return result;
    },
}
module.exports = users;