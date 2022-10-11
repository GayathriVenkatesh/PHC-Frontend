import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-successful-assignment',
  templateUrl: './successful-assignment.component.html',
  styleUrls: ['./successful-assignment.component.css']
})
export class SuccessfulAssignmentComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<SuccessfulAssignmentComponent>) { }

  ngOnInit(): void {
  }

}
