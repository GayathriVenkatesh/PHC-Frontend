import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { CancelModalComponent } from '../cancel-modal/cancel-modal.component';

@Component({
  selector: 'app-enter-followup',
  templateUrl: './enter-followup.component.html',
  styleUrls: ['./enter-followup.component.css']
})
export class EnterFollowupComponent implements OnInit {

  modalRef: MdbModalRef<CancelModalComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  ngOnInit(): void {
  }

  openCancelModal() {
    this.modalRef = this.modalService.open(CancelModalComponent, {
      modalClass: 'modal-md'
    })
  }
}
