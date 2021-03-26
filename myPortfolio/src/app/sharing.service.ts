import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  sendArray = new Subject();
  sendname = new Subject();
  constructor() { }


  shareArray(arra:any){
    this.sendArray.next(arra);
  }

  sharename(name:any){
    this.sendname.next(name);
  }
}
