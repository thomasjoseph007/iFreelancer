import { Injectable } from '@angular/core';
import { student } from './student';
import { Observable, from, throwError } from 'rxjs';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import {map,catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RegService {
student:student[];
  constructor(private http: HttpClient) { }
  
  store(student:student):Observable<student[]>{
return this.http.post(`http://localhost/reg.php`,{data:student}).pipe(
  map((res)=>{
    this.student=(res['data']);
    return this.student;}),
    catchError(this.handleError));
  }
  handleError(error:HttpErrorResponse){
return throwError('error vanneeee');
  }
}
