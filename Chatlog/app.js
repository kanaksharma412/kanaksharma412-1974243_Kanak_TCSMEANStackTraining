let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
let i = 1;
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

io.on("connection",(socket)=>{
    console.log("Client connected to application");
    socket.on("myMessage",(message)=>{
       mongoClient.connect(url, { useUnifiedTopology: true },(err1,client)=>{
           if(!err1){
               let db = client.db("meanstack");
               db.collection("Messaging").insertOne({_id:i,Name:message.user,Message:message.text});
               i++;
           }else{
               console.log(err1);
           }
       });
    });
})



http.listen(9090,()=>console.log("server running on port number 9090"));