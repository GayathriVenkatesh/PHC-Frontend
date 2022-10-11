import { Component, OnInit } from '@angular/core';
import { SuccessfulAssignmentComponent } from '../successful-assignment/successful-assignment.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-asha-modal',
  templateUrl: './asha-modal.component.html',
  styleUrls: ['./asha-modal.component.css']
})
export class AshaModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<AshaModalComponent>, private modalService: MdbModalService) { }

  ngOnInit(): void {
  }

  openModal() {
    this.modalRef = this.modalService.open(SuccessfulAssignmentComponent, {
      modalClass: 'modal-md'
    })
  }

}
  
