import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers : [ AuthService]
})
export class RegisterComponent implements OnInit {

  name:string;
  email:string;
  phone: string ;
  password:string = '';
  confirmPassword:string;
  terms:boolean;
  user:User[];
  re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.phone= this.phone.slice(4);
    const user = {
      id:null,
      name: this.name,
      email: this.email,
      phone: this.phone,
      password:this.password,
      terms:this.terms
    };
    //console.log(this.terms);
    if( this.password.length <= 0){
      alert("Please enter the password");
    }

    
    if(!this.re.test(this.email)){
        alert("Invalid email");
        return false;
    }
    if(this.password !== this.confirmPassword ){
      alert("Password dont match");
      return false;
    }
    
    
    if(this.phone.length !== 10){
      alert("Please enter a valid phone number");
      return false;
    }

    if(!this.terms){
      alert("Please agree to the terms and conditions");
      return false;
    }
    
    this.authService.registerUser(user);
    this.router.navigate(['/login']);
    this.authService.getUser().subscribe(data =>{
      console.log(data);
    });
  }
}
