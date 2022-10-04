import { Component, OnInit } from '@angular/core';
import { Followup } from '../model/followup';
import { FollowupService } from '../service/followup.service';

@Component({
  selector: 'app-followup-table',
  templateUrl: './followup-table.component.html',
  styleUrls: ['./followup-table.component.css']
})
export class FollowupTableComponent implements OnInit {

  followups: Followup[];

  constructor(private followupService: FollowupService) {
  }

  ngOnInit() {
    this.followupService.findAll().subscribe(data => {
      this.followups = data;
    });
  }

}
