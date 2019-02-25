import { Component, OnInit } from '@angular/core';
import{NgForm}from '@angular/forms';
import { student } from './student';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
import{map,catchError} from 'rxjs/operators';
import { store } from '@angular/core/src/render3';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { Observable, from, throwError } from 'rxjs';
import{HttpClient,HttpErrorResponse}from '@angular/common/http';



@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
student = new student();
error:string;

  constructor() { }

  ngOnInit() {
  }
  store(student:student):Observable<student[]>
  {
    return this.http.post('http://localhost/register.php',{data:student}).pipe(
    map((res)=>{
      this.student=(res['data']);
      return this.student;
    }),
    
    catchError(this,handleError));
  registration(f:NgForm){
    this.store.data=>this.student(data=>{this.student=data;
    form.reset},err)
    this.error=err;

  }
}
registration(form:NgForm){
  this.storeService.store(this.student).subscribe(data=>{
    this.success="successfull";
  },
  (err)=>this.error="err";
  )
};
