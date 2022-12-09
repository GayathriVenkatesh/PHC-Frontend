import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AshaWorker } from '../model/asha-worker';
import { AshaWorkerService } from '../service/asha-worker.service';
import { PHC } from '../model/phc';
import { PhcService } from '../service/phc.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomvalidationService } from '../service/customvalidation.service';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-add-phc-modal',
  templateUrl: './add-phc-modal.component.html',
  styleUrls: ['./add-phc-modal.component.css']
})
export class AddPhcModalComponent implements OnInit {

  ashaId: number | null;
  name: String;
  username: String;
  password: String;
  parentName: String;
  address: String;
  pincode: String;
  contact: String;
  title: String;
  entity: String;
  parent: String;
  asha: AshaWorker;
  ward: String;
  phc: PHC;
  phcId: number | null;
  registerForm: FormGroup;
  submitted = false;

  constructor(public modalRef: MdbModalRef<AddPhcModalComponent>, private ashaWorkerService: AshaWorkerService, 
    private phcService: PhcService, private fb: FormBuilder, private customValidator: CustomvalidationService,
    private modalService: MdbModalService) { }

  ngOnInit(): void {
    console.log(this.phcId);
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      parentName: ['', Validators.required],
      address: ['', Validators.required],
      pincode: ['', Validators.required],
      contactNo: ['', Validators.required],
    });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.table(this.registerForm.value);
      this.asha = {name: this.registerForm.value.name, ward: this.ward, area: this.registerForm.value.address, pincode: this.registerForm.value.pincode, phoneNumber: this.registerForm.value.contactNo, phcName: this.registerForm.value.parentName, ashaId: this.ashaId };
      this.phc = {phcId: this.phcId, name: this.registerForm.value.name, address: this.registerForm.value.address, pincode: this.registerForm.value.pincode, contactNumber: this.registerForm.value.contactNo, parentName: 'VVH' };
      console.log(this.name, this.address, this.pincode, this.contact);
      console.log("hello", this.asha);
      console.log("hello", this.phc);

      if (this.entity == 'ASHA') {
        this.ashaWorkerService.ashaSave(this.asha).subscribe();
      }
      else if (this.entity == 'PHC') {
        this.phcService.save(this.phc).subscribe();
      }
      this.submitted = true;    
      location.reload();
    }
  }

  openConfirm(nrcId: number) {
    this.modalRef = this.modalService.open(ConfirmDeleteComponent, {
      modalClass: 'modal-sm'
    })
  }
}
