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
      address: [this.address, Validators.required],
      pincode: [this.pincode, Validators.required],
      contact: [this.contact, Validators.required],
    });

  }

  openConfirm() {
    this.modalRef = this.modalService.open(ConfirmDeleteComponent, {
      modalClass: 'modal-sm',
      data: {
            entity: 'NRC',
            id: this.nrcId
            }
    })
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  isValid(x: any) {
    return (x.pincode.length == 6 && x.contact.length == 10)
  }
  onSubmit() {
    if (this.registerForm.valid && this.isValid(this.registerForm.value)) {
      console.table(this.registerForm.value);
    //this.asha = {name: this.name, ward: this.ward, area: this.address, pincode: this.pincode, phoneNumber: this.contact, phcName: this.parentName, ashaId: this.ashaId };
      this.nrc = {nrcId: this.nrcId, name: this.registerForm.value.nrc, address: this.registerForm.value.address, pincode: this.registerForm.value.pincode, contactNumber: this.registerForm.value.contact };
      //console.log(this.name, this.address, this.pincode, this.contact);
      //console.log("hello", this.asha);
      console.log("hello", this.nrc);

      //if(this.entity=='ASHA'){
      //this.ashaWorkerService.ashaSave(this.asha).subscribe();}
      //else{
      this.nrcService.save(this.nrc).subscribe();
      //}
      //location.reload();
      this.submitted = true;
    }
  }
}
  
