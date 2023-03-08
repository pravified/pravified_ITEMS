var express = require('express');
var router = express.Router();

// require the modules
var home = require("./homePage");
var inventory = require("./inventory");
var insertHWItem = require("./insertHWItem");
var confirmInsert = require("./confirmInsert");
var updateHWItem = require("./updateHWItem");
var confirmUpdate = require("./confirmUpdate");
var removeHWItem = require("./removeHWItem");
var confirmRemove = require("./confirmRemove");

// require display requests page
var requests = require("./requests");

// require view individual request page
var viewRequest = require("./viewRequest");

// require request form
var newRequest = require("./newRequest");
var confirmRequest = require("./confirmRequest");

// RESTful services
var restItems = require("../restful_services/restInventory.js");
var restReqs = require("../restful_services/restRequests.js");

// Home page
router.get('/', home);

// IT Items routes
router.get('/inventory', inventory);

router.get('/inventory/insert', insertHWItem);
router.post('/inventory/insert', confirmInsert);

router.get('/inventory/update/:id', updateHWItem);
router.post('/inventory/update/', confirmUpdate);

router.get('/inventory/remove/:id', removeHWItem);
router.post('/inventory/remove', confirmRemove);
router.get('/inventory/format/:format', restItems);

// IT Requests routes
router.get('/requests', requests);
router.get('/requests/view/:id', viewRequest);
router.get('/requests/create', newRequest);
router.post('/requests/create', confirmRequest);
router.get('/requests/format/:format', restReqs)

module.exports = router;

/*
	Sources:
    Bachoti, Praveen. CS602_HW3_Bachoti. METCS602. Boston University, 15 August, 2022.
*/