let fs  = require("fs");
let obj = require("mongoose");
let callInfo = fs.readFileSync("call_data.json");
obj.Promise = global.Promise;
let url = "mongodb://localhost:27017/meanstack";
obj.connect(url);
let db = obj.connection;
db.on("error",(err)=>console.log(err));
db.once("open",()=>{
    let CallSchema = obj.Schema({
        _id:Number,
        destination:String,
        source:String,
        sourceLocation:String,
        destinationLocation:String,
        callDuration:String,
        roaming:String,
        callCharge:String
    });
    let CallRecord = obj.model("",CallSchema,"CallRecord");
    callInfo = JSON.parse(callInfo.toString());
    for(let i=0;i<callInfo.length;i++){
        let entry = "p" + i;
        entry = new CallRecord({_id:callInfo[i]._id,source:callInfo[i].source,destination:callInfo[i].destination,sourceLocation:callInfo[i].sourceLocation,destinationLocation:callInfo[i].destinationLocation,callDuration:callInfo[i].callDuration,roaming:callInfo[i].roaming,callCharge:callInfo[i].callCharge});
        entry.save((err,result)=>{
            if(!err){
                console.log("record inserted successfully "+result);
            }else{
                console.log(err);
            }
            obj.disconnect();
        });
    }

})
