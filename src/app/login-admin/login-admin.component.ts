import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})

export class LoginAdminComponent implements OnInit {

  username: string;
  password: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if(this.username=="admin" && this.password=="password"){
    this.router.navigate(["admin"]);
    }
  console.log("Username: ", this.username);
    console.log("Pass: ", this.password);
  }

}
