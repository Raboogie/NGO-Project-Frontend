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

  getAllUsers(): Observable<user[]>{
    console.log("hererere")
    return this.http.get<user[]>("http://localhost:8080/api/users/getAllUsers")
    .pipe(catchError(this.errorHandler));
  }

 deleteUser(id:number): Observable<user[]>{
    return this.http.delete<user[]>("http://localhost:8080/api/users/deleteUser/"+id);
  }

  addUser(body:any) :Observable<user[]>{
    console.log("hererere")
    return this.http.post<user[]>("http://localhost:8080/api/auth/signup",body);
  } 

  getUser(id: number): Observable<user[]>{
    return this.http.get<user[]>("http://localhost:8080/api/users/getUser/" + id)
    .pipe(catchError(this.errorHandler));
    
  }
  updateUser(id: number, user: user): Observable<user[]> {
    return this.http.put<user[]>("http://localhost:8080/api/users/updateUser/" + id, user);
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}