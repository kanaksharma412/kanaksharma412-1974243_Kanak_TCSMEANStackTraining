window.onload = function retrieveData(){
    let data = sessionStorage.getItem('data');
    let array = JSON.parse(data);
    console.log(array);

    let table = document.getElementById("checkout");
    let body = table.getElementsByTagName("tbody")[0];
    let total = 0;
    for(let i=0;i<array.length;i++){
        let newRow = body.insertRow(i);

        var cell1 = newRow.insertCell(0);
        cell1.innerHTML=array[i].name;

        var cell2 = newRow.insertCell(1);
        cell2.innerHTML=array[i].quantity;

        var cell3 = newRow.insertCell(2);
        let Quantity = array[i].quantity
        let Price = array[i].price;
        let totoalPrice = Quantity*Price;
        cell3.innerHTML= totoalPrice.toString();
        total = total + totoalPrice;
    }
    document.getElementById("total").innerHTML=total.toString();
}