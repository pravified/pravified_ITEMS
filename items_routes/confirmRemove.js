const ITItemsDB = require('../itemDB.js');
const ITItem = ITItemsDB.itemModel();

module.exports =  async (req , res , next) => {
    
    let itemId = req.body.id;

    ITItem.findById(itemId, (err, it_eq) => {
      // Deleting the employee using the retrieved ID value
      it_eq.remove();
      // Redirecting to employees page
      res.redirect('/inventory');
    })
        
  };

/*
	Sources:
    Bachoti, Praveen. CS602_HW3_Bachoti. METCS602. Boston University, 15 August, 2022.
*/