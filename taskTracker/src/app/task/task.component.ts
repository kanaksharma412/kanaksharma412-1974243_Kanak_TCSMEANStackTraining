import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskArr:Array<task>=[];
  constructor(public taskSer:TaskService) { }

  ngOnInit(): void {
    this.taskSer.loadTask().subscribe(result=>{this.taskArr=result
    console.log(this.taskArr);
    });
  }

  storeTask(taskRef:any){
    //console.log(taskRef);
    this.taskSer.storeTask(taskRef);
  }

}
