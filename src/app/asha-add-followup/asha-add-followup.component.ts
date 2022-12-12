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
import { SdRange } from '../model/sd-range';
import { PatientService } from '../service/patient.service';
import { Comorbidities } from '../model/comorbidities';

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
    height: number;
    followupSchedule: FollowupSched;
    lastFollowup: Followup;
    scheduleId: string;
    sdRange: SdRange[];
    sd: number;
    registerForm: FormGroup;
    submitted = false;
      //height: number;
      comorbidities: Comorbidities[];

  constructor(private route: ActivatedRoute, private router: Router, private modalService: MdbModalService, private followupService: FollowupService,
    private fb: FormBuilder, private patientService: PatientService, private customValidator: CustomvalidationService) {
    this.followup = new Followup();
    this.followup.followupDate = new Date();
    this.date = new Date();
    this.sd = 0;
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

  get registerFormControl() {
    return this.registerForm.controls;
  }

  isValid(x: any) {
    if (x.height < 45 || x.height > 120) {
      return false
    }
    if (x.weight < 0 || x.weight > 23) {
      return false
    }
    if (x.muac < 10 || x.muac > 200) {
      return false
    }
    if (x.headCircumference < 30 || x.headCircumference > 60) {
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
        this.followup.place = this.registerForm.value.place;

        console.log("NEW Followup ", this.followup);
        this.followupService.save(this.followup).subscribe(result =>
          this.update()
        );
        this.submitted = true;
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
      this.patientService.getSdRange(this.scheduleId).subscribe(data => {
                this.sdRange = data;
                console.log("SD range", this.sdRange);
              });
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
    console.log("error", this.registerFormControl['height'])
  }

  openCancelModal() {
    this.modalRef = this.modalService.open(CancelModalComponent, {
      modalClass: 'modal-md'
    })
  }
}
