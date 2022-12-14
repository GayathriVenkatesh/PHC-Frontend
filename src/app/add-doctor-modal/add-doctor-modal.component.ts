import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { PhcService } from '../service/phc.service';
import { PHC } from '../model/phc';
import { NrcDoctorService } from '../service/nrcdoctor.service';
import { NrcDoctor } from '../model/nrc-doctor';
import { DoctorService } from '../service/doctor.service';
import { AnmService } from '../service/anm.service';
import { Doctor } from '../model/doctor';

@Component({
  selector: 'app-add-doctor-modal',
  templateUrl: './add-doctor-modal.component.html',
  styleUrls: ['./add-doctor-modal.component.css']
})
export class AddDoctorModalComponent implements OnInit {

  username: string;
  password: string;
  parent: String;
  parentName: String;
  title: String;
  id: number;
  entity: String;
  phc: PHC[];
  doctor: Doctor;
  nrcDoctor: NrcDoctor;
  anm: Doctor;
  x: string;

  constructor(public modalRef: MdbModalRef<AddDoctorModalComponent>, private modalService: MdbModalService, private phcService: PhcService, private nrcDoctorService: NrcDoctorService,private doctorService: DoctorService,private anmService: AnmService) { }

  ngOnInit(): void {
    console.log("ID: ", this.id);
  this.phcService.findAll().subscribe(data => {
      this.phc = data;
      console.log("phcs: ", this.phc);
      });
  }

   openConfirm(nrcId: number) {
     this.modalRef = this.modalService.open(ConfirmDeleteComponent, {
       modalClass: 'modal-sm',
       data: {
             entity: this.entity,
             id: this.id
         }
     })
   }

     onSubmit() {


         if (this.entity == 'NRC Doctor') {
           this.nrcDoctor = {username: this.username, password: this.password, nrcId: this.x, nrcDoctorId: this.id};
           this.nrcDoctorService.save(this.nrcDoctor).subscribe();
         }
         else if (this.entity == 'PHC Doctor') {
         this.doctor = {username: this.username, password: this.password, phcId: this.x, doctorId: this.id};
           this.doctorService.save(this.doctor).subscribe();
         }
         else {

         this.doctor = {username: this.username, password: this.password, phcId: this.x, doctorId: this.id};
           this.anmService.save(this.doctor).subscribe();
         }
         //this.submitted = true;
         location.reload();

     }


}
