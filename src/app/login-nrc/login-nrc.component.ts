import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NrcDoctorService } from '../service/nrcdoctor.service';

@Component({
  selector: 'app-login-nrc',
  templateUrl: './login-nrc.component.html',
  styleUrls: ['./login-nrc.component.css']
})
export class LoginNrcComponent implements OnInit {

  username: string;
  password: string;
  authError = false;
  constructor(private router: Router, private nrcdoctorService: NrcDoctorService) { }

  ngOnInit(): void {
  }

  login() {
    this.nrcdoctorService.findByUsername(this.username).subscribe(data => {
            console.log("NRC DOC DETAILS", data);
            if(this.password == data.password){
            localStorage.setItem('username', this.username);
            localStorage.setItem('nrc', data.nrcId);
            this.router.navigate(["nrc-home"]);
            return;
            }
            else{
              this.authError = true;
              }
    });

    console.log("Username: ", this.username);
    console.log("Pass: ", this.password);
  }

}
