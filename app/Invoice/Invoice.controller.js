
const Service = require('../Invoice/service');

exports.get = async (req, res) => {
   try {
      console.log("hrre")
      let invoiceData = await Service.getInvoices();
      if (invoiceData) {
         res.status(202).send({
            invoiceData
         });
      }
      }catch (error) {
         console.log("error...",error)
      }
   };

   exports.create = async (req, res) => {
    try {
       let invoiceData = await Service.createInvoice(req);
       if (invoiceData) {
          res.status(202).send({
            invoiceData
          });
       }
       }catch (error) {
          console.log("error...",error)
       }
    };

   exports.update = async (req, res) => {
    try {
       console.log("hrre")
       let invoiceData = await Service.updateInvoice(req);
       if (invoiceData) {
          res.status(202).send({
            invoiceData
          });
       }
       }catch (error) {
          console.log("error...",error)
       }
    };

    exports.getInvoiceById= async (req, res) => {
      try {
        const invoiceId = req.params.id;
        console.log("hrre", invoiceId);
        let invoiceData = await Service.getInvoiceById(invoiceId);
        if (invoiceData) {
          res.status(202).send({
            invoiceData,
          });
        }
      } catch (error) {
        console.log("error...", error);
      }
    };
