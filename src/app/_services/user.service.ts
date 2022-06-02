import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { user } from '../board-admin/user';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getAllEmployees(): Observable<user[]>{
    return this.http.get<user[]>("http://localhost:8080/api/users/getAllUsers")
    .pipe(catchError(this.errorHandler));
  }

 deleteEmployees(id:number): Observable<user[]>{
    return this.http.delete<user[]>("http://localhost:8080/api/users/deleteUser/"+id);
  }

  addEmployee(body:any) :Observable<user[]>{
    return this.http.post<user[]>("http://localhost:8080/api/auth/signup",body)
    .pipe(catchError(this.errorHandler));
  } 

  getEmployee(id: number): Observable<user[]>{
    return this.http.get<user[]>("http://localhost:8080/api/users/getUser/" + id)
    .pipe(catchError(this.errorHandler));
    
  }
  

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}