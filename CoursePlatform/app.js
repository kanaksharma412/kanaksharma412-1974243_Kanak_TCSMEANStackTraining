let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let path = require('path');
let port = 9090;
let obj = require("mongoose");
obj.Promise = global.Promise;
let url = "mongodb://localhost:27017/meanstack";
obj.connect(url);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));
let db = obj.connection;
db.on("error",(err)=>console.log(err));
db.once("open",()=>{
    let CourseSchema = obj.Schema({
        _id:Number,
        Name:String,
        Description:String,
        Amount:Number
    })
    let Course = obj.model("",CourseSchema,"Course");
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/Index.html"));
});


app.post("/addCourse",(req,res)=>{
    res.sendFile(path.join(__dirname+"/addCourse.html"),{dotfiles:"allow"});
    let id = req.body.course.ID;
    let name = req.body.course.name;
    let des = req.body.course.description;
    let amt = req.body.course.amount;
    let p = new Course({_id:id,Name:name,Description:des,Amount:amt});
    p.save((err,result)=>{
        if(!err){
           return res.send(result);
        }else{
           return res.send("Error");
        }

    });
});
app.post("/deleteCourse",(req,res)=>{
    res.sendFile(path.join(__dirname+"/deleteCourse.html"),{dotfiles:"allow"});
    let id = req.body.course.ID;
    Course.deleteOne({_id:id},(err,result)=>{
        if(!err){
            if(result.deletedCount>0){
                return res.send("Deleted Course with ID:"+id);
            }else if(result.deletedCount==0){
               return  res.send("Course Not Presnet");
            }else{
                return res.send("Course Not Present");
            }
        }
    });
});
app.post("/updateCourse",(req,res)=>{
    res.sendFile(path.join(__dirname+"/updateCourse.html"),{dotfiles:"allow"});
    let id = req.body.course.ID;
    let amt = req.body.course.amount;
    Course.updateOne({_id:id},{$set:{Amount:amt}},(err,result)=>{
        if(!err){
            if(result.nModified>0){
               return res.send("Amount Updated");
            }else if(result.nModified==0){
                return res.send("No updates made");
            }else{
                return res.send("No updates made");
            }
        }
    });
});
courseArray = [];
app.get("/fetchCourse",(req,res,next)=>{
    Course.find({},(err,result)=>{
        if(!err){
            result.forEach(doc=>{courseArray.push(doc)});
                res.setHeader("content-type","text/html")
                let table = ` 
                <h2>List Of Courses</h2>
                <table border=1>
                    <tr>
                        <th>Employee ID</th>
                        <th>Task ID</th>
                        <th>Task</th>
                        <th>Deadline</th>
                    </tr>`
                for(let i=0;i<courseArray.length;i++){
                    let sCourse = courseArray[i];
                    table +=`<tr>
                                <td>${sCourse._id}</td>
                                <td>${sCourse.Name}</td>
                                <td>${sCourse.Description}</td>
                                <td>${sCourse.Amount}</td>
                            </tr>`
                }
                table += '</table>'
                res.end(table);
                courseArray.length=0;
        }
    });
    
});


app.listen(port,()=>console.log("running..."));

});
