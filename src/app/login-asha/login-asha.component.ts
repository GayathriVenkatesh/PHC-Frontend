import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AshaService } from '../service/asha.service';

@Component({
  selector: 'app-login-asha',
  templateUrl: './login-asha.component.html',
  styleUrls: ['./login-asha.component.css']
})

export class LoginAshaComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, private ashaService: AshaService) { }

  ngOnInit(): void {
  }
    login(){
      this.ashaService.findByUsername(this.username).subscribe(data => {
          console.log("DOC DETAILS", data);
          if(this.password==data.password){
          localStorage.setItem('username', this.username);
          localStorage.setItem('asha', data.ashaId);
          this.router.navigate(["asha-followups"]);}
      });
      console.log("Username: ", this.username);
      console.log("Pass: ", this.password);
    }

  // login() {
  //   if(this.username=="asha" && this.password=="password"){
  //   this.router.navigate(["home"]);
  //   }
  // console.log("Username: ", this.username);
  //   console.log("Pass: ", this.password);
  // }

}
