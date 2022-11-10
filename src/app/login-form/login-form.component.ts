import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

username: string;
password: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.username=="doctor" && this.password=="password"){
    this.router.navigate(["home"]);
    }
  console.log("Username: ", this.username);
    console.log("Pass: ", this.password);
  }

}
