import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-anm',
  templateUrl: './login-anm.component.html',
  styleUrls: ['./login-anm.component.css']
})

export class LoginAnmComponent implements OnInit {

  username: string;
  password: string;
  authError = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if(this.username=="anm" && this.password=="password"){
    this.router.navigate(["home"]);
    }
    else{
        this.authError = true;
    }
  console.log("Username: ", this.username);
    console.log("Pass: ", this.password);
  }

}
