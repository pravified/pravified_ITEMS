const ITItemsDB = require('./itemDB.js');

const ITItem = ITItemsDB.itemModel();
// initialization of the requests database collection
(async() => {
	// delete existing contents
	await ITItem.deleteMany({});
	// creating new documents
	let item01 = new ITItem({
		name: "HD LCD Display",
		type: "Monitor",
		brand: "HP",
		modelNum: "SD0592A",
		acqDate: "07/20/2018",
		employee: "Terrence Smith",
		condition: "Like New",
		cost: 95,
		location: "Boston, MA"
	}); 

	let item02 = new ITItem({
		name: "Wireless 3-button mouse",
		type: "Mouse",
		brand: "Logitech",
		modelNum: "AVJ87D34",
		acqDate: "03/12/2019",
		employee: "Thomas Brown",
		condition: "Good",
		cost: 11,
		location: "Pittsburgh, PA"
	}); 

	let item03 = new ITItem({
		name: "Wired USB-C Keyboard",
		type: "Keyboard",
		brand: "AmazonBasics",
		modelNum: "007YRG32",
		acqDate: "05/14/2018",
		employee: "Lisa Jones",
		condition: "Used",
		cost: 22,
		location: "San Antonio, TX"
	}); 
	// saving new documents
	await Promise.all([
		item01.save(), 
		item02.save(), 
		item03.save()
		]);

	let itemRecords = await ITItem.find({});

	console.log(itemRecords);

	process.exit();

})();
/*
	Sources:
    Bachoti, Praveen. CS602_HW3_Bachoti. METCS602. Boston University, 15 August, 2022.
*/












