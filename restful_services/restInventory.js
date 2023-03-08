const ITItemsDB = require('../itemDB.js');
const ITItem = ITItemsDB.itemModel();

module.exports = async (req , res , next) => {

    let format = req.params.format;
    // querying all inventory data from format parameter value
    let itemsData = await ITItem.find({});

    // conditional to check for format value
    if(format === "xml"){
        // generating and sending xml response 
        console.log("returning xml");
        var xmlFile = '<?xml version="1.0" encoding="UTF-8"?>';
        xmlFile += '<items>';
        itemsData.forEach((itemDoc)=>{
            xmlFile += '<item>';
            xmlFile += '<id>'+itemDoc.id+'</id>';
            xmlFile += '<name>'+itemDoc.name+'</name>';
            xmlFile += '<type>'+itemDoc.type+'</type>';
            xmlFile += '<brand>'+itemDoc.brand+'</brand>';
            xmlFile += '<modelNum>'+itemDoc.modelNum+'</modelNum>';
            xmlFile += '<acqDate>'+itemDoc.acqDate+'</acqDate>';
            xmlFile += '<employee>'+itemDoc.employee+'</employee>';
            xmlFile += '<condition>'+itemDoc.condition+'</condition>';
            xmlFile += '<cost>'+itemDoc.cost+'</cost>';
            xmlFile += '<location>'+itemDoc.location+'</location>';
            xmlFile += '</item>';
        });
        xmlFile += '</items>';
        res.send(xmlFile);
    }
    else if(format === "json"){
        // formatting and sending xml response 
        console.log("returning json");
        res.send(JSON.stringify(itemsData, null, ' '));
    }
    else{
        // render view that shows unrecognized format error
        console.log("rest error");
        res.render('/restError');
    }
}

/*
    Sources:
    Bachoti, Praveen. CS602_HW3_Bachoti. METCS602. Boston University, 15 August, 2022.
    “JSON.stringify() - Javascript: MDN.” JavaScript | MDN, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify. 
    “XML.” Npm, https://www.npmjs.com/package/xml. 
    Yatin. “MongoDB Foreach() Example.” Examples Java Code Geeks, 2 Mar. 2018, https://examples.javacodegeeks.com/software-development/mongodb/mongodb-foreach-example/. 
*/