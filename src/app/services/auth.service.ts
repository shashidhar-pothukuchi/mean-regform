import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from '../user.model';
import { JsonPipe, registerLocaleData } from '@angular/common';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user : User[] ;
  private loginData : {
    success: boolean,
    message:any
  };

  constructor(private http:HttpClient) { }

  getUser():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/users');
  
  }

  registerUser(user):Observable<any[]>{
    
    this.http.post('http://localhost:3000/users',user)
    .subscribe( (resdata) =>{
      alert("Registered Successfully!");
    });
    
  return <any>user;
  }

  loginUser(userdata){
    return this.http.post('http://localhost:3000/login',userdata);
    //return <any>({message:'hello'});
}
}
