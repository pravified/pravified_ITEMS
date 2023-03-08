const ITItemsDB = require('../itemDB.js');
const ITRequest = ITItemsDB.reqModel();

module.exports = async (req , res , next) => {

    let reqIdValue = req.params.id;
    // querying for selected request by id parameter
    ITRequest.findById(reqIdValue, (err, req) => {
      // rendering the read-only request page with retrived request
      res.render('viewRequest', {
        title: "Request from "+req.fullname,
        data: {
          id: reqIdValue,
          fullname: req.fullname,
          reqItem: req.reqItem,
          needBy: req.needBy,
          location: req.location,
          justification: req.justification
        }
      });
    })
  };

/*
	Sources:
    Bachoti, Praveen. CS602_HW3_Bachoti. METCS602. Boston University, 15 August, 2022.
*/

  