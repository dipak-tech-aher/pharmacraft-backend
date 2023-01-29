const Company = require('../models/company.model');

const company = {
    getCompany: async () => {
        let result = await Company.find().exec();
        if (result == null) {
            return "nodata";
        }
        return result;
    }
}
module.exports = company;