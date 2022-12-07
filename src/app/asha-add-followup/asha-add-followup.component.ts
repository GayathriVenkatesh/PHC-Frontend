import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { CancelModalComponent } from '../cancel-modal/cancel-modal.component';
import { FollowupService } from '../service/followup.service';
import { Followup } from '../model/followup';
import { FollowupSchedule } from '../model/followup-schedule';
import { FollowupSched } from '../model/followup-sched';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomvalidationService } from '../service/customvalidation.service';

@Component({
  selector: 'app-asha-add-followup',
  templateUrl: './asha-add-followup.component.html',
  styleUrls: ['./asha-add-followup.component.css']
})
export class AshaAddFollowupComponent implements OnInit {

    modalRef: MdbModalRef<CancelModalComponent> | null = null;
    followup: Followup;
    date: Date;
    caseId: string;
    followupSchedule: FollowupSched;
    lastFollowup: Followup;
    scheduleId: string;
    registerForm: FormGroup;
    submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private modalService: MdbModalService, private followupService: FollowupService,
    private fb: FormBuilder, private customValidator: CustomvalidationService) {
    this.followup = new Followup();
    this.followup.followupDate = new Date();
    this.date = new Date();
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }
    onSubmit(){
    console.log("NEW Followup ", this.followup);
    this.followupService.save(this.followup).subscribe(result =>
    this.update());
    this.submitted = true;
      if (this.registerForm.valid) {
        alert('Form Submitted succesfully!!!\n Check the values in browser console.');
        console.table(this.registerForm.value);
      }
    }

    update(){
    this.followupService.update(parseInt(this.scheduleId)).subscribe(result =>
        this.gotoFollowups());
    }

    gotoFollowups(){

            this.router.navigate(['/asha-followups']);
            }


  ngOnInit(): void {
      this.scheduleId = this.router.url.split("/")[2];
      this.registerForm = this.fb.group({
        height: ['', Validators.required],
        weight: ['', Validators.required],
        muac: ['', Validators.required],
        headCircumference: ['', Validators.required],
        place: ['', Validators.required],
        dietAdequacy: ['', Validators.required],
        coMorbidities: ['', Validators.required],
        otherSymptoms: [''],
      },);
  }

  openCancelModal() {
    this.modalRef = this.modalService.open(CancelModalComponent, {
      modalClass: 'modal-md'
    })
  }
}
