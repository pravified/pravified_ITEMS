const ITItemsDB = require('../itemDB.js');
const ITRequest = ITItemsDB.reqModel();

module.exports = async (req , res , next) => {
 
    // Variable values taken from request body
    let reqFullName = req.body.req_fullname;
    let reqItem = req.body.req_item;
    let reqNeededBy = req.body.req_neededby;
    let reqLocation = req.body.req_loc;
    let reqJustification = req.body.req_justif;

    // Creating new variable for new item document
    var newReq = new ITRequest({
      fullname: reqFullName,
      reqItem: reqItem,
      needBy: reqNeededBy,
      location: reqLocation,
      justification: reqJustification
    });
    // Saving new item document
    newReq.save();

    res.redirect('/');
  };

/*
	Sources:
    Bachoti, Praveen. CS602_HW3_Bachoti. METCS602. Boston University, 15 August, 2022.
*/
