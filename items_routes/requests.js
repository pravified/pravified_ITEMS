const ITItemsDB = require('../itemDB.js');
const ITRequest = ITItemsDB.reqModel();

// display requests

module.exports = async (req , res , next) => {
        // query all employee requests
        let reqsData = await ITRequest.find({});
        // map data items
        let mappedData = reqsData.map( req => {
            return {
                id: req.id,
                fullname: req.fullname,
                reqItem: req.reqItem,
                needBy: req.needBy,
                location: req.location,
                justification: req.justification
            }
        });
        // render requests view with mapped data
        res.render('requests',
                {title:"Employee Requests", data:mappedData});
        
};

 /*
	Sources:
    Bachoti, Praveen. CS602_HW3_Bachoti. METCS602. Boston University, 15 August, 2022.
*/