import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { SmallModalComponent } from '../small-modal/small-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-asha-patient-followup',
  templateUrl: './asha-patient-followup.component.html',
  styleUrls: ['./asha-patient-followup.component.css']
})

export class AshaPatientFollowupComponent implements OnInit {

  modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  openModal() {
    this.modalRef = this.modalService.open(ModalComponent, {
      modalClass: 'modal-lg'
    })
  }

  openSmallModal() {
    this.modalRef = this.modalService.open(SmallModalComponent, {
      modalClass: 'modal-sm'
    })
  }

  ngOnInit(): void {
  }

}

