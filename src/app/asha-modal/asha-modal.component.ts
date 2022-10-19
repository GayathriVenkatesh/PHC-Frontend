import { Component, OnInit } from '@angular/core';
import { SuccessfulAssignmentComponent } from '../successful-assignment/successful-assignment.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AshaWorkerService } from '../service/asha-worker.service';
import { Router } from '@angular/router';
import { AshaWorker } from '../model/asha-worker';

@Component({
  selector: 'app-asha-modal',
  templateUrl: './asha-modal.component.html',
  styleUrls: ['./asha-modal.component.css']
})
export class AshaModalComponent implements OnInit {

  workers: AshaWorker[];
  area: String;
  ward: String;
  pincode: String;

  constructor(private router: Router, private ashaWorkerService: AshaWorkerService, public modalRef: MdbModalRef<AshaModalComponent>, private modalService: MdbModalService) { }

  ngOnInit() {
    // this.dischargeId = this.router.url.split("/")[2];
    this.ashaWorkerService.findAll()
    .subscribe(data => {
      this.workers = data;  
      console.log("WORKERS", data);
    }); 
  } 

  change(ward: String, area: String, pincode: String) {
    console.log("ward now", ward, area, pincode)
    if (!(ward || area || pincode)) {
      this.ashaWorkerService.findAll().subscribe(data => {
        this.workers = data;  
      }); 
    }
    else {
      this.ashaWorkerService.findByLocation(this.ward, this.area, this.pincode).subscribe(data => {
        if(data.length != 0) {
          this.workers = data;  
        }
      }); 
    }
  }

  onKeyArea(event: any) {
    this.area = event.target.value;
    this.change(this.ward, this.area, this.pincode);
  }

  onKeyWard(event: any) {
    this.ward = event.target.value;
    this.change(this.ward, this.area, this.pincode);
  }

  onKeyPincode(event: any) {
    this.pincode = event.target.value;
    this.change(this.ward, this.area, this.pincode);
  }

  openModal() {
    this.modalRef = this.modalService.open(SuccessfulAssignmentComponent, {
      modalClass: 'modal-md'
    })
  }

}
  
