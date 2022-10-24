import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { SmallModalComponent } from '../small-modal/small-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-track-child-details',
  templateUrl: './track-child-details.component.html',
  styleUrls: ['./track-child-details.component.css']
})
export class TrackChildDetailsComponent implements OnInit {

  visible = false;
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

  toggleCollapse(): void {
    this.visible = !this.visible;
  }
  ngOnInit(): void {
  }

}
