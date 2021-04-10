let http = require("http");
let url = require("url");
let port = 9090;
let fs = require("fs")
let obj = require("./task");
let task = new obj.task();
let dataArray = new Array();
let addTask = ` <h2 style="text-align:center;">Task Planner</h2>
                <h5>Add Task<h5>
                <form action="/add" method="get">
                <pre>
                <label>Emp Id:</label>  <input type="text" name="id"/><br/>
                <label>Task Id:</label> <input type="text" name="Tid"/><br/>
                <label>Task:</label>    <input type="text" name="task"/><br/>
                <label>Deadline:</label><input type="date" name="date"/><br/>
                <input type="submit" value="Add Task"/>
                </pre>
                </form>

                <form action="/delete" method="get">
                <p><b>Delete Task</b></p>
                <pre>
                <label>Task Id:</label> <input type="text" name="del"/><br/>
                                     <input type="submit" value="Delete Task"/>
                </pre>
                </form><br/>
                <form action="/display" method="put">
                <input type="submit" value="List Tasks"/>
                </form>
               
            `
let server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url=="/"){
        res.setHeader("content-type","text/html")
        res.end(addTask);
           
    }else if(req.url.substring(0,4)=="/add"){
        let data = url.parse(req.url,true).query;
        let duplicate = false;
        if(fs.existsSync("task.json")){
            let tasks = fs.readFileSync("task.json");
            tasks = JSON.parse(tasks.toString());
            for(let i=0;i<tasks.length;i++){
                let singleTask = tasks[i];
                if(data.Tid==singleTask.tid){
                    duplicate=true;
                }
                dataArray.push(singleTask);
            }
            if(!duplicate){
                task.eid = data.id;
                task.tid = data.Tid;
                task.task = data.task;
                task.deadline = data.date;
                dataArray.push(task);
            }
            let jsonTasks = JSON.stringify(dataArray);
            fs.writeFileSync("task.json",jsonTasks);
            if(!duplicate)res.write("Task Added!");
            else res.write("Task ID already exists");
            dataArray.length=0;
        }else{
                task.eid = data.id;
                task.tid = data.Tid;
                task.task = data.task;
                task.deadline = data.date;
                dataArray.push(task);
                let jsonTasks = JSON.stringify(dataArray);
                fs.writeFileSync("task.json",jsonTasks);
                res.write("Task added!");
                dataArray.length=0;
        }
    }else if(req.url.substring(0,7)=="/delete"){
        let data = url.parse(req.url,true).query;
        let flag = 0;
        if(fs.existsSync("task.json")){
            let tasks = fs.readFileSync("task.json");
            if(tasks.toString()=="[]"){
                res.write("No tasks present!!");
            }else{
                tasks = JSON.parse(tasks.toString());
                for(let i=0;i<tasks.length;i++){
                    let singleTask = tasks[i];
                    if(singleTask.tid==data.del){
                        tasks.splice(i,1);
                        flag++;
                    }
                }
                let jsonTasks = JSON.stringify(tasks);
                fs.writeFileSync("task.json",jsonTasks);
                if(flag==1) res.write("Task removed!");
                else res.write("No task with the given id found!");
                flag=0;
            }
        }else{
            res.write("You need to add tasks first before deleting!");
        }
    }else if(req.url.substring(0,8)=="/display"){
        let table = ` 
        <table border=1>
                <tr>
                    <th>Employee ID</th>
                    <th>Task ID</th>
                    <th>Task</th>
                    <th>Deadline</th>
                </tr>`
        if(fs.existsSync("task.json")){
            let tasks = fs.readFileSync("task.json");
            if(tasks.toString()=="[]") alert("No data to display!");
            else{
                tasks = JSON.parse(tasks.toString());
                for(let i=0;i<tasks.length;i++){
                    let sTask = tasks[i];
                    table += `
                    
                <tr>
                    <td>${sTask.eid}</td>
                    <td>${sTask.tid}</td>
                    <td>${sTask.task}</td>
                    <td>${sTask.deadline}</td>
                </tr>
                    
                    
                    `
                }
                
    }
    }
        table += `</table>`
        res.end(table);
    }
    
    res.end();
})



server.listen(port,()=>console.log(`running on port num ${port}`));