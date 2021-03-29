import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css']
})
export class ExitComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  goToWelcome(){
    this.router.navigate(["welcome"]);
  }

}
