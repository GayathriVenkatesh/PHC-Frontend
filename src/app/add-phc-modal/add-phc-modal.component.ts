import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { AshaWorker } from '../model/asha-worker';
import { AshaWorkerService } from '../service/asha-worker.service';
import { PHC } from '../model/phc';
import { PhcService } from '../service/phc.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomvalidationService } from '../service/customvalidation.service';

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
    private phcService: PhcService, private fb: FormBuilder, private customValidator: CustomvalidationService) { }

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
    this.asha = {name: this.name, ward: this.ward, area: this.address, pincode: this.pincode, phoneNumber: this.contact, phcName: this.parentName, ashaId: this.ashaId };
    this.phc = {phcId: this.phcId, name: this.name,address: this.address, pincode: this.pincode, contactNumber: this.contact, parentName: 'VVN' };
    console.log(this.name, this.address, this.pincode, this.contact);
    console.log("hello", this.asha);
    console.log("hello", this.phc);

    if(this.entity=='ASHA'){
    this.ashaWorkerService.ashaSave(this.asha).subscribe();}
    else if(this.entity=='PHC'){
    this.phcService.save(this.phc).subscribe();
    }
    this.submitted = true;
      if (this.registerForm.valid) {
        alert('Form Submitted succesfully!!!\n Check the values in browser console.');
        console.table(this.registerForm.value);
      }
    location.reload();
  }


}
