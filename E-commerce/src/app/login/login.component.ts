import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AutherisationService } from '../autherization.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AutherisationService,private routes:Router) { }

  ngOnInit(): void {
  }
  loginForm = new FormGroup ({
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(4)])
  });

  login(){
  
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value).subscribe(success =>{
      console.log("I am Success",success);
    
      let data: any = success;
       if (data == 0) {
        console.log("Invalid Credential");

      }
      else {
        console.log("Login Success", success);

        this.routes.navigate(['/home']);

        window.alert("Login successful")

        // localStorage.setItem("id",data.id)
        // localStorage.setItem("token1",data.data.token)
      }
      
    },error => {
      console.log("I am error",error);
    });}

}
