import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-asha',
  templateUrl: './login-asha.component.html',
  styleUrls: ['./login-asha.component.css']
})

export class LoginAshaComponent implements OnInit {

  username: string;
  password: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if(this.username=="asha" && this.password=="password"){
    this.router.navigate(["home"]);
    }
  console.log("Username: ", this.username);
    console.log("Pass: ", this.password);
  }

}
