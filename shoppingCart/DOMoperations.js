var cart = new Array();
console.log(cart);
var Item = /** @class */ (function () {
    function Item(name, price, id, image, quantity) {
        this.name = name;
        this.price = price;
        this.id = id;
        this.image = image;
        this.quantity = quantity;
    }
    return Item;
}());
var apple = new Item("Apple", 1, 100, "apple.jpg", 0);
var cereal = new Item("Cereal", 5, 101, "cereal.jpg", 0);
var milk = new Item("Milk", 3, 102, "milk.jpg", 0);
var egg = new Item("Egg", 4, 103, "egg.jpg", 0);
var bread = new Item("Bread", 6, 104, "bread.jpg", 0);
var tomatoes = new Item("Tomatoes", 2, 105, "tomatoes.jpg", 0);
var Items = new Array();
Items.push(apple);
Items.push(cereal);
Items.push(milk);
Items.push(egg);
Items.push(bread);
Items.push(tomatoes);
window.onload = function disPlayItem() {
    var _loop_1 = function (i) {
        var child = document.createElement('div');
        child.id = "child" + i;
        child.className = "divChild";
        document.getElementById("add").appendChild(child);
        var Name = document.createElement('p');
        var Price = document.createElement('p');
        var Image_1 = document.createElement('img');
        var button = document.createElement('button');
        button.innerText = "Add";
        button.id = Items[i].id.toString();
        button.className = i.toString();
        button.onclick = function () {
            var id = parseInt(button.id);
            var itemNumber = parseInt(button.className);
            if (cart.length == 0) {
                cart.push(Items[itemNumber]);
                Items[itemNumber].quantity++;
                cartSize();
            }
            else {
                var found = false;
                for (var j = 0; j < cart.length; j++) {
                    var Id = cart[j].id;
                    if (id == Id) {
                        cart[j].quantity++;
                        found = true;
                        cartSize();
                    }
                }
                if (!found) {
                    cart.push(Items[itemNumber]);
                    Items[itemNumber].quantity++;
                    cartSize();
                }
            }
        };
        var button1 = document.createElement('button');
        button1.innerText = "Delete";
        button1.id = "d" + Items[i].id;
        button1.className = i.toString();
        button1.onclick = function () {
            var id = parseInt(button1.id.substring(1));
            var itemNumber = parseInt(button1.className);
            if (cart.length == 0) {
                alert("No itmes in the cart!");
            }
            else {
                var found = false;
                for (var j = 0; j < cart.length; j++) {
                    var Id = cart[j].id;
                    if (id == Id) {
                        cart[j].quantity--;
                        if (cart[j].quantity == 0) {
                            cart.splice(j, 1);
                        }
                        found = true;
                        cartSize();
                    }
                }
                if (!found) {
                    alert("Item not present in the basket!!");
                }
            }
        };
        Name.id = "Name" + i;
        Price.id = "Price" + i;
        Image_1.id = "Image" + i;
        Name.className = "Item";
        Price.className = "Item";
        Image_1.className = "Item";
        document.getElementById("child" + i).appendChild(Name);
        document.getElementById("child" + i).appendChild(Price);
        document.getElementById("child" + i).appendChild(Image_1);
        document.getElementById("child" + i).appendChild(button);
        document.getElementById("child" + i).appendChild(button1);
        document.getElementById("Name" + i).innerHTML = "Name: " + Items[i].name;
        document.getElementById("Price" + i).innerHTML = "Price: $" + Items[i].price;
        document.getElementById("Image" + i).src = Items[i].image;
    };
    for (var i = 0; i < Items.length; i++) {
        _loop_1(i);
    }
};
function cartSize() {
    var size = 0;
    for (var i = 0; i < cart.length; i++) {
        size += cart[i].quantity;
    }
    document.getElementById("para").innerHTML = size.toString();
}
function sendData() {
    sessionStorage.setItem('data', JSON.stringify(cart));
    location.href = "Checkout.html";
}
