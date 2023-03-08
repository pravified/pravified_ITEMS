const ITItemsDB = require('../itemDB.js');
const ITItem = ITItemsDB.itemModel();

module.exports = async (req , res , next) => {

    let itemId = req.params.id;

    // Retrieving item data with id parameter value
    ITItem.findById(itemId, (err, it_eq) => {
            console.log("ID: "+itemId);
            console.log("Name: "+it_eq.name);

            // Rendering update item page with current data
            res.render('updateHWItemView',
            {
                title: "Update Equipment Item",
                data: {
                    id: it_eq.id,
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
            }
            );
        }

    );
};

 /*
	Sources:
    Bachoti, Praveen. CS602_HW3_Bachoti. METCS602. Boston University, 15 August, 2022.
*/