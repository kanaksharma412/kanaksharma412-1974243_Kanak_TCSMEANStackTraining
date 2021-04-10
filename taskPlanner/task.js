class task{
    constructor(eid,tid,task,deadline){
        this.eid=eid;
        this.tid = tid;
        this.task = task;
        this.deadline = deadline;
    }
}

let fs = require("fs");
module.exports = {task};
