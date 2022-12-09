import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Remarks } from '../model/remarks';
import { RemarksService } from '../service/remarks.service';

@Component({
  selector: 'app-remarks-modal',
  templateUrl: './remarks-modal.component.html',
  styleUrls: ['./remarks-modal.component.css']
})
export class RemarksModalComponent implements OnInit {

  caseId: String;
  remarks: Remarks;
  constructor(public modalRef: MdbModalRef<RemarksModalComponent>, private remarksService: RemarksService) { }

  ngOnInit(): void {
    this.remarks = new Remarks();

  }

  onSubmit() {
    // this.remarks = {remarkId: null, caseId: this.caseId, remark: "Doing good", doctorName: "Dr. Mishra", doctorNumber: "12121212", date: new Date()}
    this.remarks.remarkId = null;
    this.remarks.caseId = this.caseId;
    this.remarks.date = new Date();
    console.log("REMARKS", this.remarks);   
    this.remarksService.save(this.remarks).subscribe();
    this.modalRef.close()
  }
}
