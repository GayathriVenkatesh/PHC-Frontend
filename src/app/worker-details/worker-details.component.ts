import { Component, OnInit } from '@angular/core';
import { AshaWorkerService } from '../service/asha-worker.service';
import { Router } from '@angular/router';
import { AshaWorker } from '../model/asha-worker';

@Component({
  selector: 'app-worker-details',
  templateUrl: './worker-details.component.html',
  styleUrls: ['./worker-details.component.css']
})
export class WorkerDetailsComponent implements OnInit {

  ashaId: String;
  asha: AshaWorker;

  constructor(private router: Router, private ashaWorkerService: AshaWorkerService) { }

  ngOnInit(): void {
  this.ashaId = this.router.url.split("/")[2];
    console.log("ASHA", this.ashaId);
      this.ashaWorkerService.findById(this.ashaId).subscribe(data => {
        this.asha = data;
      console.log("assigned asha ",data);
      });
  }

}
