import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-nrc',
  templateUrl: './login-nrc.component.html',
  styleUrls: ['./login-nrc.component.css']
})
export class LoginNrcComponent implements OnInit {

  username: string;
  password: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if(this.username=="nrc" && this.password=="password"){
    this.router.navigate(["home"]);
    }
  console.log("Username: ", this.username);
    console.log("Pass: ", this.password);
  }

}
