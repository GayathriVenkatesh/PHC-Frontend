import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { DischargedPatient } from '../model/discharged-patient';
import { PatientService } from '../service/patient.service';
import { AshaWorker } from '../model/asha-worker';
import { AshaWorkerService } from '../service/asha-worker.service';
import { PhcService } from '../service/phc.service';
import { NrcService } from '../service/nrc.service';
import { PHC } from '../model/phc';
import { NrcDoctorService } from '../service/nrcdoctor.service';
import { NrcDoctor } from '../model/nrc-doctor';
import { DoctorService } from '../service/doctor.service';
import { AnmService } from '../service/anm.service';
import { Doctor } from '../model/doctor';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<ConfirmDeleteComponent>, private ashaWorkerService: AshaWorkerService, private nrcService: NrcService, private phcService: PhcService, private nrcDoctorService: NrcDoctorService,private doctorService: DoctorService,private anmService: AnmService) { }

  entity: String;
  id: number;
  ngOnInit(): void {
  }

    delete(): void{
    if(this.entity=='ASHA'){
    console.log(this.id);

    this.ashaWorkerService.deactivate(this.id).subscribe();
    }
    else if(this.entity=='NRC'){
        console.log("#5", this.id);
        this.nrcService.deactivate(this.id).subscribe();
        }
    else if(this.entity=='NRC Doctor'){
        console.log("#", this.id);
        this.nrcDoctorService.deactivate(this.id).subscribe();
            }
    else if(this.entity=='PHC'){
        console.log("##", this.id);
        this.phcService.deactivate(this.id).subscribe();
        }
    else if(this.entity=='PHC Doctor'){
        console.log("###", this.id);
        this.doctorService.deactivate(this.id).subscribe();
        }
    else{
    console.log("####",this.id);
    this.anmService.deactivate(this.id).subscribe();
    }
    location.reload();
    }


  reject(): void {
    this.modalRef.close();
  }
}