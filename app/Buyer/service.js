const Buyer = require('../models/buyer.model');

const buyer = {
    getBuyers: async () => {
        let result = await Buyer.find().exec();
        if (result == null) {
            return "nodata";
        }
        return result;
    },
    create: async (req) => {
        const sitelodata = new Buyer({
            name: req.body.name,
            address: req.body.address,
            pincode: req.body.pincode,
            gst: req.body.gst
        }); 
        return sitelodata.save();
    },
    update: async (req) => {
        const filter = { _id:req.body.buyerId };
        const update = req.body;
        let doc = await Buyer.findOneAndUpdate(filter, update, {
            new: true,
            upsert: true
          });
        return doc;
    },
    getBuyerById: async (id) => {
        // return await Orders.findOne({'order_id':data.orderid});
        let result = await Buyer.findById({_id:id}).exec();
        if (result == null) {
            return "nodata";
        }
        return result;
    },
}
module.exports = buyer;