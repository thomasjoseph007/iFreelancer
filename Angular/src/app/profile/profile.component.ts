import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;
  
  constructor() {
    this.user={name:"Nandhu Aravind",
  job:"18-03-1996",
  mob:8129280754};
   }
  

  ngOnInit() {
  }

}
