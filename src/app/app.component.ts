import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  router: string;

  constructor(public _router: Router){
    this.title = 'PHC Application';
    this.router = _router.url; 
  }
}