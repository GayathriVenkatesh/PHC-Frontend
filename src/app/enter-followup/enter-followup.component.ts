import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { CancelModalComponent } from '../cancel-modal/cancel-modal.component';
import { FollowupService } from '../service/followup.service';
import { Followup } from '../model/followup';
import { FollowupSchedule } from '../model/followup-schedule';
import { FollowupSched } from '../model/followup-sched';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/patient';
import { CustomvalidationService } from '../service/customvalidation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SdRange } from '../model/sd-range';

@Component({
  selector: 'app-enter-followup',
  templateUrl: './enter-followup.component.html',
  styleUrls: ['./enter-followup.component.css']
})
export class EnterFollowupComponent implements OnInit {

  modalRef: MdbModalRef<CancelModalComponent> | null = null;
  followup: Followup;
  caseId: string;
  followupSchedule: FollowupSched;
  lastFollowup: Followup;
  scheduleId: string;
  patient: Patient;
  registerForm: FormGroup;
  submitted = false;
  sdRange: SdRange[];
  sd: number;

  constructor(private route: ActivatedRoute, private router: Router, private modalService: MdbModalService, private followupService: FollowupService,
    private patientService: PatientService, private fb: FormBuilder,
    private customValidator: CustomvalidationService) {
      this.followup = new Followup();
      this.followup.followupDate = new Date();
      this.sd=0;
  }

  ngOnInit(): void {
    this.scheduleId = this.router.url.split("/")[2];
    console.log("HELLO AARU", this.caseId);
    //this.patientService.findByCaseId(this.caseId).subscribe(data => {
    //  this.patient = data;
    //})

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
    },
    );
    console.log("height: ", this.registerForm.value.height);
  }

    calculate() {
        if(this.followup.height <45){
            this.followup.height = 45;
        }
        else if(this.followup.height>120){
            this.followup.height=120;
        }
        for(var i=0; i < this.sdRange.length; i++){
           if(this.followup.height == this.sdRange[i].lengthCm){
               if(this.followup.weight <= this.sdRange[i].minus4Sd){
               this.sd=-4;
               }
               else if(this.followup.weight <= this.sdRange[i].minus3Sd){
               this.sd=-3;
               }
               else if(this.followup.weight <= this.sdRange[i].minus2Sd){
               this.sd=-2;
               }
               else if(this.followup.weight <= this.sdRange[i].minus1Sd){
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


  onSubmit() {
    console.log("NEW Followup ", this.followup);
    this.followupService.save(this.followup).subscribe(result =>
      this.update()
    );
    this.submitted = true;
    if (this.registerForm.valid) {
      // alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table("FORM VALUES", this.registerForm.value);
    }
  }

  update() {
    this.followupService.update(parseInt(this.scheduleId)).subscribe(result =>
      this.gotoFollowups()
    );
  }

  gotoFollowups() {
    this.router.navigate(['/followup-list']);
  }

  // back(): void {
  //   this.router.navigate(['/followup/{{this.scheduleId}}']);
  // }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  openCancelModal(scheduleId: string) {
    this.modalRef = this.modalService.open(CancelModalComponent, {
      modalClass: 'modal-md',
      data: {scheduleId: scheduleId}
    })
  }
}
