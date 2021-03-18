var sessionData = [];
function addBlog(){
   var data = readFromData();
   sessionData.push(data);
   console.log(sessionData);
   sessionStorage.setItem('dataEntry', JSON.stringify(sessionData)); 
   resetData();
   var i = sessionData.length;
   addData(data,i);
}

function readFromData(){
    var obj = {}
    obj.title = document.getElementById("title").value;
    obj.description = document.getElementById("desc").value;
    obj.image = document.getElementById("imageId").files[0].name;
    console.log(obj);
    return obj;
}

function resetData(){
    document.getElementById("title").value="";
    document.getElementById("desc").value="";
    document.getElementById("imageId").value="";
}


function addData(data,i){
    //var blog = sessionStorage.getItem('dataEntry');
    blog = data;
    
    var child = document.createElement('div');
    child.id = "child"+i;
    child.className = "divChild";
    document.getElementById("add").appendChild(child);
    var titleHolder = document.createElement('h3');
    var desHolder = document.createElement('p');
    var imageHolder = document.createElement('img');
    imageHolder.style="max-width: 100%; max-height: 100%;"
    titleHolder.id = "titleHolder"+i;
    desHolder.id = "desHolder"+i;
    imageHolder.id = "imageHolder"+i;
    titleHolder.className = "element";
    desHolder.className = "element";
    imageHolder.className = "element";
    document.getElementById("child"+i).appendChild(titleHolder);
    document.getElementById("child"+i).appendChild(desHolder);
    document.getElementById("child"+i).appendChild(imageHolder);
    document.getElementById("titleHolder"+i).innerHTML = blog.title;
    document.getElementById("desHolder"+i).innerHTML = blog.description;
    document.getElementById("imageHolder"+i).src = blog.image; 
   

}