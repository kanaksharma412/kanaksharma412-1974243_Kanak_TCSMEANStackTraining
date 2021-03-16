var sessionData = [];
function onFormSubmit(){
   var data = readFromData();
   sessionData.push(data);
   sessionStorage.setItem('dataEntry', JSON.stringify(sessionData)); 
   resetData();
}

function readFromData(){
    var obj = {}
    obj.clientName = document.getElementById("Name").value;
    obj.projectName = document.getElementById("ProjectName").value;
    obj.budget = document.getElementById("Budget").value;
    console.log(obj);
    return obj;
}

function resetData(){
    document.getElementById("Name").value="";
    document.getElementById("ProjectName").value="";
    document.getElementById("Budget").value="";
}