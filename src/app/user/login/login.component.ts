import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:string;
  password:string;
  success: boolean;
  message:string;

  constructor(private authservice: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    const logindata = {
      name: this.name,
      password : this.password
    }

    this.authservice.loginUser(logindata).subscribe( data => {
      console.log(data);
      this.success = data["success"]; 
      if(this.success === false){
          this.message = data["message"];
      }
      else{
        alert("welcome, " + data["message"].name);
      }
    });
  }

}
