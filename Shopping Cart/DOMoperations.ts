
let cart: Array<Item> = new Array();
console.log(cart);
class Item {
    public name:string;
    public price:number;
    public id:number;
    public image:string;
    public quantity:number;
    constructor(name:string, price:number, id:number,image:string,quantity:number){
                this.name = name;
                this.price = price;
                this.id = id;
                this.image = image;
                this.quantity = quantity;

    }

}

let apple = new Item("Apple",1,100,"apple.jpg",0);
let cereal = new Item("Cereal",5,101,"cereal.jpg",0);
let milk = new Item("Milk",3,102,"milk.jpg",0);
let egg = new Item("Egg",4,103,"egg.jpg",0);
let bread = new Item("Bread",6,104,"bread.jpg",0);
let tomatoes = new Item("Tomatoes",2,105,"tomatoes.jpg",0);

let Items: Array<Item> = new Array();
Items.push(apple);
Items.push(cereal);
Items.push(milk);
Items.push(egg);
Items.push(bread);
Items.push(tomatoes);


window.onload=function disPlayItem() : void{
    for(let i=0;i<Items.length;i++){
        let child = document.createElement('div');
        child.id = "child"+i;
        child.className = "divChild";
        document.getElementById("add").appendChild(child);
        let Name = document.createElement('p');
        let Price = document.createElement('p');
        let Image = (<HTMLImageElement>document.createElement('img'));
        let button = document.createElement('button');
        button.innerText = "Add";
        button.id = Items[i].id.toString();
        button.className = i.toString();
        button.onclick = () =>
            {
                let id = parseInt(button.id);
                let itemNumber = parseInt(button.className);
                if(cart.length==0){ 
                    cart.push(Items[itemNumber]);
                    Items[itemNumber].quantity++;
                    cartSize();
                }
                else{
                    let found = false;
                    for(let j=0;j<cart.length;j++){
                        let Id = cart[j].id;
                        if(id==Id){
                            cart[j].quantity++;
                            found = true;
                            cartSize();
                        }
                    }
                    if(!found){
                        cart.push(Items[itemNumber]);
                        Items[itemNumber].quantity++;
                        cartSize();
                    }
                }
            }
        let button1 = document.createElement('button');
        button1.innerText = "Delete";
        button1.id = "d"+Items[i].id;
        button1.className = i.toString();
        button1.onclick = () =>
            {
                let id = parseInt(button1.id.substring(1));
                let itemNumber = parseInt(button1.className);
                if(cart.length==0){ 
                    alert("No itmes in the cart!");
                }
                else{
                    let found = false;
                    for(let j=0;j<cart.length;j++){
                        let Id = cart[j].id;
                        if(id==Id){
                            cart[j].quantity--;
                            if(cart[j].quantity==0){
                                cart.splice(j,1);
                            }
                            found = true;
                            cartSize();
                        }
                    }
                    if(!found){
                        alert("Item not present in the basket!!");
                    }
                }
            }
        Name.id = "Name"+i;
        Price.id = "Price"+i;
        Image.id = "Image"+i;
        Name.className = "Item";
        Price.className = "Item";
        Image.className = "Item";
        document.getElementById("child"+i).appendChild(Name);
        document.getElementById("child"+i).appendChild(Price);
        document.getElementById("child"+i).appendChild(Image);
        document.getElementById("child"+i).appendChild(button);
        document.getElementById("child"+i).appendChild(button1);
        document.getElementById("Name"+i).innerHTML = "Name: "+Items[i].name;
        document.getElementById("Price"+i).innerHTML ="Price: $"+Items[i].price;
        (<HTMLImageElement>document.getElementById("Image"+i)).src = Items[i].image;
    }
}



function cartSize(){
    let size = 0;
    for(let i=0;i<cart.length;i++){
        size += cart[i].quantity;
    }
    document.getElementById("para").innerHTML = size.toString();
}

function sendData(){
    sessionStorage.setItem('data',JSON.stringify(cart));
    location.href = "Checkout.html";
}
