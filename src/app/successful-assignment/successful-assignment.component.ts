import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { AshaWorkerService } from '../service/asha-worker.service';
import { Router } from '@angular/router';
import { AshaWorker } from '../model/asha-worker';

@Component({
  selector: 'app-successful-assignment',
  templateUrl: './successful-assignment.component.html',
  styleUrls: ['./successful-assignment.component.css']
})
export class SuccessfulAssignmentComponent implements OnInit {

    ashaId: String;
    asha: AshaWorker;
  constructor(private ashaWorkerService: AshaWorkerService, public modalRef: MdbModalRef<SuccessfulAssignmentComponent>) { }

  ngOnInit(): void {
  console.log("ASHA", this.ashaId);
  this.ashaWorkerService.findById(this.ashaId).subscribe(data => {
    this.asha = data;
  console.log("assigned asha ",data);
  });


  }

  close(){
//   setTimeout(
//             function(){
            location.reload();
//             },
//             1000);
  }

}
