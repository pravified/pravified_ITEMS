const ITItemsDB = require('../itemDB.js');
const ITRequest = ITItemsDB.reqModel();

module.exports = async (req , res , next) => {

    let format = req.params.format;
    // querying all request data from format parameter value
    let reqsData = await ITRequest.find({});

    // conditional to check for format value
    if(format === "xml"){
        // generating and sending xml response 
        console.log("returning xml");
        var xmlFile = '<?xml version="1.0" encoding="UTF-8"?>';
        xmlFile += '<requests>';
        reqsData.forEach((reqDoc)=>{
            xmlFile += '<request>';
            xmlFile += '<id>'+reqDoc.id+'</id>';
            xmlFile += '<fullname>'+reqDoc.fullname+'</fullname>';
            xmlFile += '<reqItem>'+reqDoc.reqItem+'</reqItem>';
            xmlFile += '<needBy>'+reqDoc.needBy+'</needBy>';
            xmlFile += '<location>'+reqDoc.location+'</location>';
            xmlFile += '<justification>'+reqDoc.justification+'</justification>';
            xmlFile += '</request>';
        });
        xmlFile += '</requests>';
        res.send(xmlFile);      
    }
    else if(format === "json"){
        // formatting and sending xml response 
        console.log("returning json");
        res.send(JSON.stringify(reqsData, null, ' '));
    }
    else{
        // render view that shows unrecognized format error
        console.log("rest error");
        res.render('restError');
    }
}

/*
    Sources:
    Bachoti, Praveen. CS602_HW3_Bachoti. METCS602. Boston University, 15 August, 2022.
    “JSON.stringify() - Javascript: MDN.” JavaScript | MDN, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify. 
    “XML.” Npm, https://www.npmjs.com/package/xml. 
    Yatin. “MongoDB Foreach() Example.” Examples Java Code Geeks, 2 Mar. 2018, https://examples.javacodegeeks.com/software-development/mongodb/mongodb-foreach-example/. 
*/