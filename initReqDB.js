const ITItemsDB = require('./itemDB.js');

const ITRequest = ITItemsDB.reqModel();
// initialization of the requests database collection
(async() => {
	// delete existing contents
	await ITRequest.deleteMany({});
	// creating new document
	let req01 = new ITRequest({
		fullname: "Praveen Bachoti",
		reqItem: "USB Thumb drive 32GB",
		needBy: "08/31/2022",
		location: "Reston, VA",
		justification: "I need this device to store company files to work on."
	}); 
	// saving new document
	await Promise.all([req01.save()]);

	let reqRecords = await ITRequest.find({});

	console.log(reqRecords);

	process.exit();

})();

/*
	Sources:
    Bachoti, Praveen. CS602_HW3_Bachoti. METCS602. Boston University, 15 August, 2022.
*/











