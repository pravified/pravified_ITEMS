const mongoose = require('mongoose');
// credentials for db connection
const credentials = require("./credentials.js");
// connection string for localhost
const dbUri = 'mongodb://' + credentials.host + '/' + credentials.database

let connection = null;
let model = null;
let Schema = mongoose.Schema;

// schema for IT equipment items
let itemSchema = new Schema({
	name: String,
	type: String,
	brand: String,
	modelNum: String,
	acqDate: Date,
	employee: String,
	condition: String,
	cost: Number,
	location: String

}, {
	collection: 'IT_Equipment'
});

// schema for employee requests
let requestSchema = new Schema({
	fullname: String,
	reqItem: String,
	needBy: Date,
	location: String,
	justification: String
}, {
	collection: 'IT_Requests'
});

// exports for the two data models based off of schemas
module.exports = {	
	itemModel: () => {
		console.log("Creating connection and itemModel...");
		connection = mongoose.createConnection(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
		model = connection.model("EquipmentModel", itemSchema);
		return model;
	},
	reqModel: () => {
		console.log("Creating connection and reqModel...");
		connection = mongoose.createConnection(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
		model = connection.model("RequestModel", requestSchema);
		return model;
	}
};

// Sources:
// Bachoti, Praveen. CS602_HW3_Bachoti. METCS602. Boston University, 15 August, 2022.
// “Connection String URI Format.” MongoDB Manual, https://www.mongodb.com/docs/manual/reference/connection-string/#std-label-connections-standard-connection-string-format. 
























