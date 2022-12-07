import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FollowupService } from '../service/followup.service';
import { Followup } from '../model/followup';
import { FollowupSchedule } from '../model/followup-schedule';
import { FollowupSched } from '../model/followup-sched';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomvalidationService } from '../service/customvalidation.service';

@Component({
  selector: 'app-record-visit',
  templateUrl: './record-visit.component.html',
  styleUrls: ['./record-visit.component.css']
})
export class RecordVisitComponent implements OnInit {

    followup: Followup;
    caseId: String;
    followupSchedule: FollowupSched;
    lastFollowup: Followup;
    scheduleId: String;
    registerForm: FormGroup;
    submitted = false;

    constructor(private route: ActivatedRoute, private router: Router, private followupService: FollowupService,
      private fb: FormBuilder, private customValidator: CustomvalidationService) {
      this.followup = new Followup();
      this.followup.followupDate = new Date();
      }

    onSubmit(){
    console.log("NEW Followup ", this.followup);

    this.followupService.save(this.followup).subscribe(result =>
      this.onSaveSchedule());
      this.submitted = true;
      if (this.registerForm.valid) {
        alert('Form Submitted succesfully!!!\n Check the values in browser console.');
        console.table(this.registerForm.value);
      }
    }

    onSaveSchedule(){
//               this.caseId = this.router.url.split("/")[2];
      this.followupService.findLast().subscribe(data => {
      this.lastFollowup = data;
      console.log("last followup schedule: ",this.lastFollowup);
      this.followupSchedule = new FollowupSched();
      this.followupSchedule.caseId = this.caseId;
      this.followupSchedule.followupId = this.lastFollowup.followupId;
      this.followupSchedule.type = "GENERAL";
      this.followupSchedule.status = "DONE";
      this.followupSchedule.followupDate = this.lastFollowup.followupDate;
//       this.followupSchedule.followupDate = new Date();
      console.log("HIIII", this.followupSchedule);
      this.followupService.saveFollowup(this.followupSchedule).subscribe(result =>
                     this.gotoFollowups()
                     );
           });

//       this.gotoFollowups();
    }

    gotoFollowups(){
    this.router.navigate(['/followup-list']);
    }

    get registerFormControl() {
      return this.registerForm.controls;
    }

    ngOnInit(): void {
    this.caseId = this.router.url.split("/")[2];
      console.log("HELLO AARU", this.caseId);
      this.registerForm = this.fb.group({
        chiefComplaints: ['', Validators.required],
        height: ['', Validators.required],
        weight: ['', Validators.required],
        muac: ['', Validators.required],
        headCircumference: ['', Validators.required],
        place: ['', Validators.required],
        dietAdequacy: ['', Validators.required],
        coMorbidities: ['', Validators.required],
        provisionalDiagnosis: ['', Validators.required],
        treatment: ['', Validators.required],
        otherSymptoms: [''],
      },);

    }
  }
