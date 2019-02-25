import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dare',
  templateUrl: './dare.component.html',
  styleUrls: ['./dare.component.css']
})
export class DareComponent implements OnInit {
message:string=new Date().toDateString();
  constructor() { }

  ngOnInit() {
  }

  addtwonumbers(a:number,b:number){
  return a+b;
}
}
