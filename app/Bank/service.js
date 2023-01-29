const Bank = require('../models/bank-details.model');

const abouts = {
    getData: async () => {
        let result = await Bank.findOne().exec();
        if (result == null) {
            return "nodata";
        }
        return result;
    }
}
module.exports = abouts;