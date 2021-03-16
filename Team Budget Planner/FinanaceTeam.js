window.onload = function retrieveData(){
    var data = sessionStorage.getItem('dataEntry');
    data = JSON.parse(data);
    console.log(data);

    var table = document.getElementById("AnnualBudget");
    var body = table.getElementsByTagName("tbody")[0];
    var total = 0;
   for(var i=0;i<data.length;i++){ 
        var newRow = body.insertRow(body.length);
    
        var cell1 = newRow.insertCell(0);
        cell1.innerHTML=data[i].clientName;

        var cell2 = newRow.insertCell(1);
        cell2.innerHTML=data[i].projectName;


        var cell3 = newRow.insertCell(2);
        cell3.innerHTML=data[i].budget;
        total = eval(total) +eval(data[i].budget);
   }
   document.getElementById("total").innerHTML=total;

}



    
   
