const ITItemsDB = require('../itemDB.js');
const ITItem = ITItemsDB.itemModel();

module.exports = async (req , res , next) => {
 
    // Variable values taken from request body
    let itemName = req.body.item_name;
    let itemType = req.body.item_type;
    let itemBrand = req.body.item_brand;
    let itemModelNo = req.body.item_modelno;
    let itemDateAcq = req.body.item_dateacq;
    let itemEmp = req.body.item_emp;
    let itemCond = req.body.item_cond;
    let itemCost = req.body.item_cost;
    let itemLoc = req.body.item_loc;

    // Creating new variable for new item document
    var newItem = new ITItem({
      name: itemName,
      type: itemType,
      brand: itemBrand,
      modelNum: itemModelNo,
      acqDate: itemDateAcq,
      employee: itemEmp,
      condition: itemCond,
      cost: itemCost,
      location: itemLoc
    });
    // Saving new item document
    newItem.save();

    res.redirect('/inventory');
  };
/*
	Sources:
    Bachoti, Praveen. CS602_HW3_Bachoti. METCS602. Boston University, 15 August, 2022.
*/
