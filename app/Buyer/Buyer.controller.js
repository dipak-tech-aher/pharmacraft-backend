
const Service = require('../Buyer/service');

exports.getBuyers = async (req, res) => {
   try {
      let buyerDetails = await Service.getBuyers();
      if (buyerDetails) {
         res.status(202).send({
            buyerDetails
         });
      }
   } catch (error) {
      console.log("error...", error)
   }
};

exports.create = async (req, res) => {
   try {
      console.log("hrre")
      let buyerDetails = await Service.create(req);
      if (buyerDetails) {
         res.status(202).send({
            buyerDetails
         });
      }
   } catch (error) {
      console.log("error...", error)
   }
};

exports.update = async (req, res) => {
   try {
      console.log("hrre")
      let buyerDetails = await Service.update(req);
      if (buyerDetails) {
         res.status(202).send({
            buyerDetails
         });
      }
   } catch (error) {
      console.log("error...", error)
   }
};

exports.getBuyerById = async (req, res) => {
   try {
      const { id } = req.params
      let buyerDetails = await Service.getBuyerById(id);
      if (buyerDetails) {
         res.status(202).send({
            buyerDetails
         });
      }
   } catch (error) {
      console.log("error...", error)
   }
};
