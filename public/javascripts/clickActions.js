// javascript functions to respond to click events on various links/buttons

// navigate to add hardware item page
function addHWItem(){
    window.location.href = '/inventory/insert';
}

// cancel adding and return to inventory
function addCancel(){
    window.location.href = '/inventory';
}

// cancel deleting and return to inventory
function deleteCancel(){
    window.location.href = '/inventory';
}

// navigate to home page using back button
function returnHome(){
    window.location.href = '/';
}

// navigate to requests page using back button
function returnToReqs(){
    window.location.href = '/requests';
}

 /*
	Sources:
    Bachoti, Praveen. CS602_HW3_Bachoti. METCS602. Boston University, 15 August, 2022.
*/