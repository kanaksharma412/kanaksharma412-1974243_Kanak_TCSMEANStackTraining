class emp{
    constructor(id,name,salary,date,time){
        this.id = id;
        this.salary=salary;
        this.name=name;
        this.date = date;
        this.time = time;
    }
}
function addData(){
    let fs = require("fs");
    let exists = false;
    let data = new Array();
    let currDate = new Date();
    let currTime = new Date();
    let employee = new emp();
    let obj = require("readline-sync");
    let num = obj.question("How many records?");
    if(fs.existsSync("employee.json")){
        exists = true;
        debugger;

    }
    if(exists){
        let empInfo = fs.readFileSync("employee.json");
        debugger;
        if(empInfo.toString()==""){
            for(let i=0;i<num;i++){
                employee.id= obj.question("Enter the id");
                employee.name = obj.question("Enter name");
                employee.salary = obj.question("Enter salary")
                employee.date = (currDate.getMonth()+1) + "/" + currDate.getDate() + "/"+ currDate.getFullYear();
                employee.time = currTime.getHours()+":"+currTime.getMinutes()+":"+currTime.getSeconds();
                data.push(employee);
            }
        }else{
            empInfo = JSON.parse(empInfo.toString());
            for(let i=0;i<empInfo.length;i++){
                let info = empInfo[i];
                data.push(info);
                debugger;
            }
            for(let i=0;i<num;i++){
                employee.id= obj.question("Enter the id");
                employee.name = obj.question("Enter name");
                employee.salary = obj.question("Enter salary")
                employee.date = (currDate.getMonth()+1) + "/" + currDate.getDate() + "/"+ currDate.getFullYear();
                employee.time = currTime.getHours()+":"+currTime.getMinutes()+":"+currTime.getSeconds();
                data.push(employee);
                debugger;
            }
        }
        let jsonData = JSON.stringify(data);
        fs.writeFileSync("employee.json",jsonData);
        console.log("file written");
    }else{
        for(let i=0;i<num;i++){
            employee.id= obj.question("Enter the id");
            employee.name = obj.question("Enter name");
            employee.salary = obj.question("Enter salary");
            employee.date = (currDate.getMonth()+1) + "/" + currDate.getDate() + "/"+ currDate.getFullYear();
                employee.time = currTime.getHours()+":"+currTime.getMinutes()+":"+currTime.getSeconds();
            data.push(employee);
        }
        let jsonData = JSON.stringify(data);
        fs.writeFileSync("employee.json",jsonData);
        console.log("file written");
    }
}
module.exports={emp,addData};
