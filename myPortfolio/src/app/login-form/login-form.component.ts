import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { user } from '../MyUser';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  constructor(public router:Router, private sibService:SharingService) { }

  ngOnInit(): void {
    let userArray:any;
    this.sibService.sendArray.subscribe(array=>{
      userArray = array;
      console.log(userArray);
      sessionStorage.setItem('userInfo',JSON.stringify(userArray));
    });

  }

  signUp(){
    this.router.navigate(["signup"]);
  }

  login(){
   let data = sessionStorage.getItem('userInfo');
   let userInfo = JSON.parse(data||"");
   let newUser = new user();
   newUser.user = (<HTMLInputElement>document.getElementById("user")).value;
   newUser.pass = (<HTMLInputElement>document.getElementById("pass")).value;
   for(let i=0;i<userInfo.length;i++){
    if(newUser.user==userInfo[i].user && newUser.pass==userInfo[i].pass){
      this.sibService.sharename(newUser.user);
      this.router.navigate(["portfolio"]);
   }else{
     alert("Invalid credientials!!!");
   }       
 }
}
}
