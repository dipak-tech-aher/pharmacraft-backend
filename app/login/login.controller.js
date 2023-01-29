const Logins = require('../login/service');
exports.Login = async (req, res) => {
   try {
      console.log("hrre")
      let loginData = await Logins.Login(req);
      if (loginData) {
         res.status(202).send({
            loginData
         });
      }
      }catch (error) {
         console.log("error...",error)
      }
   };

   exports.getEmail = async (req, res) => {
      try {
         console.log("hrre")
         let loginData = await Logins.getEmail(req);
         if (loginData) {
            res.status(202).send({
               loginData
            });
         }
         }catch (error) {
            console.log("error...",error)
         }
      };

      exports.resetPass = async (req, res) => {
         try {
            console.log("hrre")
            let loginData = await Logins.resetPass(req);
            if (loginData) {
               res.status(202).send({
                  loginData
               });
            }
            }catch (error) {
               console.log("error...",error)
            }
         };



         exports.sendMail = async (req, res) => {
            try {
               console.log("hrre")
               let loginData = await Logins.sendMail(req);
               if (loginData) {
                  res.status(202).send({
                     loginData
                  });
               }
               }catch (error) {
                  console.log("error...",error)
               }
            };
