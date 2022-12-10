import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FollowupService } from '../service/followup.service';
import { Followup } from '../model/followup';
import { FollowupSchedule } from '../model/followup-schedule';
import { FollowupSched } from '../model/followup-sched';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomvalidationService } from '../service/customvalidation.service';
import { SdRange } from '../model/sd-range';

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
    sdRange: SdRange[];
    sd: number;
    height: number;

    constructor(private route: ActivatedRoute, private router: Router, private followupService: FollowupService,
      private fb: FormBuilder, private customValidator: CustomvalidationService) {
      this.followup = new Followup();
      this.followup.followupDate = new Date();
      this.sd = 0;
      }

    isValid(x: any) {
      if (x.height < 0 || x.height > 100) {
        return false
      }
      if (x.weight < 0 || x.weight > 100) {
        return false
      }
      if (x.muac < 0 || x.muac > 100) {
        return false
      }
      if (x.headCircumference < 0 || x.headCircumference > 100) {
        return false
      }
      return true;
    }

    onSubmit() {
      if (this.registerForm.valid && this.isValid(this.registerForm.value)) {
        console.table(this.registerForm.value);
        this.followup.height = this.registerForm.value.height;
        this.followup.weight = this.registerForm.value.weight;
        this.followup.sdRange = this.sd;
        this.followup.muac = this.registerForm.value.muac;
        this.followup.headCircumference = this.registerForm.value.headCircumference;
        this.followup.dietAdequacy = this.registerForm.value.dietAdequacy;
        this.followup.coMorbidities = this.registerForm.value.coMorbidities;
        this.followup.otherSymptoms = this.registerForm.value.otherSymptoms;
        this.followup.provisionalDiagnosis = this.registerForm.value.provisionalDiagnosis;
        this.followup.treatment = this.registerForm.value.treatment;
        this.followup.chiefComplaints = this.registerForm.value.chiefComplaints;
        this.followup.place = this.registerForm.value.place;
        console.log("NEW Followup ", this.followup);

        this.followupService.save(this.followup).subscribe(result =>
          this.onSaveSchedule()
        );
        this.submitted = true;
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

    }

    gotoFollowups(){
      this.router.navigate(['/followup-list']);
    }

    get registerFormControl() {
      return this.registerForm.controls;
    }

    calculate() {
      console.log("height: ", this.registerForm.value.height);
      this.height = this.registerForm.value.height;
          if(this.height <45){
              this.height = 45;
          }
          else if(this.height>120){
              this.height=120;
          }
          for(var i=0; i < this.sdRange.length; i++){
             if(this.height == this.sdRange[i].lengthCm){
                 if(this.registerForm.value.weight <= this.sdRange[i].minus4Sd){
                 this.sd=-4;
                 }
                 else if(this.registerForm.value.weight <= this.sdRange[i].minus3Sd){
                 this.sd=-3;
                 }
                 else if(this.registerForm.value.weight <= this.sdRange[i].minus2Sd){
                 this.sd=-2;
                 }
                 else if(this.registerForm.value.weight <= this.sdRange[i].minus1Sd){
                 this.sd=-1;
                 }
                 else{
                 this.sd=0;
                 }
             }
  
  
          }
          console.log("SD: ", this.sd);
          this.followup.sdRange = this.sd;
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
