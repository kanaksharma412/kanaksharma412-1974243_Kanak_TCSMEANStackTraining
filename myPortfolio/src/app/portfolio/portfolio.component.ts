import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { contact } from '../contact';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  userName:any;
  contacts:Array<contact> = new Array();
  constructor(public router:Router, private sibService:SharingService) { }

  ngOnInit(): void {
    this.sibService.sendname.subscribe(name=>{
      sessionStorage.setItem('UserName',JSON.stringify(name));
    });
     let userInfo = sessionStorage.getItem('UserName');
     let obj = JSON.parse(userInfo||"");
     this.userName = obj;

  }
  logout(){
    this.router.navigate(["login"]);
  }

  addInfo(){
   let obj = new contact();
   obj.name =(<HTMLInputElement>document.getElementById("contact")).value;
   obj.number =(<HTMLInputElement>document.getElementById("number")).value;
   this.contacts.push(obj);
  }

}
