import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  
  modalRef: MdbModalRef<NotificationComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  openNotificationModal() {
    this.modalRef = this.modalService.open(NotificationComponent, {
      modalClass: 'modal-sm'
    })
  }

  ngOnInit(): void {
  }

}
