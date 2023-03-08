const ITItemsDB = require('../itemDB.js');
const ITItem = ITItemsDB.itemModel();

module.exports = async (req , res , next) => {

    // Variables containing updated item data taken from request body
    let itemId = req.body.id;
    let itemName = req.body.item_name;
    let itemType = req.body.item_type;
    let itemBrand = req.body.item_brand;
    let itemModelNo = req.body.item_modelno;
    let itemDateAcq = req.body.item_dateacq;
    let itemEmp = req.body.item_emp;
    let itemCond = req.body.item_cond;
    let itemCost = req.body.item_cost;
    let itemLoc = req.body.item_loc;

    // Retrieving item record using id value
    ITItem.findById(itemId, (err, it_eq) => {
        // Saving updated item data with variable values
        it_eq.name = itemName;
        it_eq.type = itemType;
        it_eq.brand = itemBrand;
        it_eq.modelNum = itemModelNo;
        it_eq.acqDate = itemDateAcq;
        it_eq.employee = itemEmp;
        it_eq.condition = itemCond;
        it_eq.cost = itemCost;
        it_eq.location = itemLoc;

        it_eq.save();
        res.redirect('/inventory');
    })

 };

 /*
	Sources:
    Bachoti, Praveen. CS602_HW3_Bachoti. METCS602. Boston University, 15 August, 2022.
*/