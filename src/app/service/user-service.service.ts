import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 /* data:any=[];
  constructor(private http:HttpClient) { }
  getAllEmployees(): Observable<Users[]>{
    return this.http.get<Users[]>("http://localhost:8080/api/users/getAllUsers")
    .pipe(catchError(this.errorHandler));
  }
 
  getEmployee(id: number): Observable<Users[]>{
    return this.http.get<Users[]>("http://localhost:3000/data/" + id)
    .pipe(catchError(this.errorHandler));
    
  }
  

  addEmployee(body:any) :Observable<Users[]>{
    return this.http.post<Users[]>("http://localhost:3000/data/",body)
    .pipe(catchError(this.errorHandler));
  } 

  deleteEmployee(id:number):Observable<Users[]> {
    return this.http.delete<Users[]>("http://localhost:3000/data/" + id);
  }

    updateEmployee(id:number, body:any):Observable<Users[]>{
      return this.http.put<Users[]>("http://localhost:3000/data/" + id,body);
    }

    viewArow(user:any) {
      alert(`
        ID: ${user.userId}
        firstname: ${user.firstname}
        lastname: ${user.lastname}
        username: ${user.username}
        email:${user.email}
      `);
    }
  
    addARow() {
      let temp = {
        "id": this.genNextId(),
        "name": Math.random().toString(20).substring(2,10).replace(/([0-9])/gi,''),
        "age": Math.floor(Math.random()*100),
        "gender":"M",
        "salary":  (Math.random()*100) * 1000,
        "position":"Senior"
      }
      this.data.push(temp);
    }
  
    deleleArow(user:any) {
      for(let i = 0; i < this.data.length; i++) {
        if(this.data[i].id == user.userId.id) {
          this.data.splice(i,1);
          break;
        }
      }
    }
  
    updateArow(user:any){
      let update = {
        "id": user.userId,
        "firstname": user.firstname,
        "age": Math.floor(Math.random()*100),
        "salary":  (Math.random()*100) * 1000
      }
      for(let i = 0; i < this.data.length; i++) {
        if(this.data[i].id == user.userId) {
          //this.data.splice(i,1);
          //this.data.splice(i,0,update);
          this.data[i] = {
            ...update
          }
          break;
        }
      }
    }
  
    genNextId(){
      let maxId= 0;
      this.data.forEach(
        (user:any) => {
          if(user.id > maxId) maxId = user.id;
        }
      )
      return +maxId + 1;
    }
    
  
  
    errorHandler(error: HttpErrorResponse){
      return throwError(error.message || "Server Error");
    }
  */
  
}
