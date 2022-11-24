import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DoctorService } from '../service/doctor.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

username: string;
password: string;
  constructor(private router: Router, private doctorService: DoctorService) { }

  ngOnInit(): void {
  }

  login(){
    this.doctorService.findByUsername(this.username).subscribe(data => {
        console.log("DOC DETAILS", data);
        if(this.password == data.password){
        localStorage.setItem('username', this.username);
        localStorage.setItem('phc', data.phcId);
        this.router.navigate(["home"]);}
    });
    console.log("Username: ", this.username);
    console.log("Pass: ", this.password);
  }

}
