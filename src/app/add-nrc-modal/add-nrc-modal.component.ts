import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { NRC } from '../model/nrc';
import { CustomvalidationService } from '../service/customvalidation.service';
import { NrcService } from '../service/nrc.service';

@Component({
  selector: 'app-add-nrc-modal',
  templateUrl: './add-nrc-modal.component.html',
  styleUrls: ['./add-nrc-modal.component.css']
})
export class AddNrcModalComponent implements OnInit {

  nrcId: number | null;
  name: String;
  address: String;
  pincode: String;
  contact: String;
  title: String;
  nrc: NRC;
  registerForm: FormGroup;
  submitted = false;

  constructor(public modalRef: MdbModalRef<AddNrcModalComponent>, private nrcService: NrcService, 
    private fb: FormBuilder, private customValidator: CustomvalidationService, private modalService: MdbModalService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nrc: [this.name, Validators.required],
      address: ['', Validators.required],
      pincode: ['', Validators.required],
      contactNo: ['', Validators.required],
    });

  }

  openConfirm(nrcId: number) {
    this.modalRef = this.modalService.open(ConfirmDeleteComponent, {
      modalClass: 'modal-sm',
      data: {
            entity: 'NRC',
            id: nrcId
            }
    })
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }
    onSubmit() {
    //this.asha = {name: this.name, ward: this.ward, area: this.address, pincode: this.pincode, phoneNumber: this.contact, phcName: this.parentName, ashaId: this.ashaId };
    this.nrc = {nrcId: this.nrcId, name: this.name,address: this.address, pincode: this.pincode, contactNumber: this.contact };
    //console.log(this.name, this.address, this.pincode, this.contact);
    //console.log("hello", this.asha);
    console.log("hello", this.nrc);

      //if(this.entity=='ASHA'){
      //this.ashaWorkerService.ashaSave(this.asha).subscribe();}
      //else{
      this.nrcService.save(this.nrc).subscribe();
      //}
      location.reload();
      this.submitted = true;
      if (this.registerForm.valid) {
        alert('Form Submitted succesfully!!!\n Check the values in browser console.');
        console.table(this.registerForm.value);
      }
    }

}
