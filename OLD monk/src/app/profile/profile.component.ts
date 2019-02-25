import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;
  constructor() { 
    this.user={name:'thomas',
    job:'se',
    address:'123, kottayM,kerala',
     phone:[
       '123333',
       '233784'
     ]}
  }
 /*  toggle(){
    this.collapse=!this.collapse;
  } */
  ngOnInit() {
  }
  
}
