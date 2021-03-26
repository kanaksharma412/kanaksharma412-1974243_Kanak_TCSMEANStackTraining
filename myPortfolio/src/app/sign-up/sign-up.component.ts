import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {user} from '../MyUser';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public router:Router,private sibService:SharingService) { }
  users:Array<user> = new Array();
  ngOnInit(): void {
  }
  back(){
    this.router.navigate(["login"]);
  }
  
  addUser(){ 
    let data = this.readFromData();
    this.users.push(data);
    this.sibService.shareArray(this.users);
    this.resetData();
    this.router.navigate(["login"]);
  }

  readFromData(){
    let obj = new user();
    obj.fname = (<HTMLInputElement>document.getElementById("fname")).value;
    obj.lname = (<HTMLInputElement>document.getElementById("lname")).value;
    obj.user = (<HTMLInputElement>document.getElementById("user")).value;
    obj.pass = (<HTMLInputElement>document.getElementById("pass")).value;
    return obj;
  }

  resetData(){
    (<HTMLInputElement>document.getElementById("fname")).value="";
    (<HTMLInputElement>document.getElementById("lname")).value="";
    (<HTMLInputElement>document.getElementById("user")).value="";
    (<HTMLInputElement>document.getElementById("pass")).value="";
  }
}

