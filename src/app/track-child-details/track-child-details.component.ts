import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-child-details',
  templateUrl: './track-child-details.component.html',
  styleUrls: ['./track-child-details.component.css']
})
export class TrackChildDetailsComponent implements OnInit {

  visible = false;

  constructor() { }

  toggleCollapse(): void {
    this.visible = !this.visible;
  }
  ngOnInit(): void {
  }

}
