const ITItemsDB = require('../itemDB.js');
const ITItem = ITItemsDB.itemModel();

// display equipment

module.exports = async (req , res , next) => {
        // query all IT equipment
        let itemsData = await ITItem.find({});
        // map data items
        let mappedData = itemsData.map( it_eq => {
            return {
                id: it_eq._id,
                name: it_eq.name,
                type: it_eq.type,
                brand: it_eq.brand,
                modelNum: it_eq.modelNum,
                acqDate: it_eq.acqDate,
                employee: it_eq.employee,
                condition: it_eq.condition,
                cost: it_eq.cost,
                location: it_eq.location
            }
        });
        // render inventory view with mapped data
        res.render('inventory',
                {title:"Inventory", data:mappedData});
        
};

/*
	Sources:
    Bachoti, Praveen. CS602_HW3_Bachoti. METCS602. Boston University, 15 August, 2022.
*/