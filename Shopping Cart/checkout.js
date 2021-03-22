window.onload = function retrieveData() {
    var data = sessionStorage.getItem('data');
    var array = JSON.parse(data);
    console.log(array);
    var table = document.getElementById("checkout");
    var body = table.getElementsByTagName("tbody")[0];
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        var newRow = body.insertRow(i);
        var cell1 = newRow.insertCell(0);
        cell1.innerHTML = array[i].name;
        var cell2 = newRow.insertCell(1);
        cell2.innerHTML = array[i].quantity;
        var cell3 = newRow.insertCell(2);
        var Quantity = array[i].quantity;
        var Price = array[i].price;
        var totoalPrice = Quantity * Price;
        cell3.innerHTML = totoalPrice.toString();
        total = total + totoalPrice;
    }
    document.getElementById("total").innerHTML = total.toString();
};
