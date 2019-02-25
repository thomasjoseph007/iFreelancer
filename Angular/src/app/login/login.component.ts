import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { student } from '../student';
import { Observable, from } from 'rxjs';
import{HttpClient,HttpErrorResponse}from '@angular/common/http';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
import{map,catchError} from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { RegService } from '../reg.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  student=new student();
  error:string;
  success="";
  constructor(private regservice:RegService) { }

  ngOnInit() {
    
  }
  registration(f:NgForm){
    this.regservice.store(this.student).subscribe(data=>{this.success="Successfully inserted";},(err)=>{
      this.error="Error Occured";
    });
    f.reset;
  }

}
