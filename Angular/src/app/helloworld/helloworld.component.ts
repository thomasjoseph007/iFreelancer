import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {
  message:string= new Date().toLocaleDateString();
  
  constructor() { }

  ngOnInit() {
  }

    addtwonum(a:number,b:number){
      return a+b;
    }


}
