import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from '../model/patient';
import { Discharge } from '../model/discharge';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { DischargedPatient } from '../model/discharged-patient';


@Injectable()
export class PatientService {

  private patientsUrl: string;
  private childUrl: string;
  private dischargeUrl: string;
  private dischargedPatientUrl: string;

  constructor(private http: HttpClient) {
    this.patientsUrl = 'http://localhost:8080/patient';
    this.dischargeUrl = 'http://localhost:8080/get-discharge';
    this.childUrl = 'http://localhost:8080/child-details';
    this.dischargedPatientUrl = 'http://localhost:8080/discharge';
  }

  public findAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientsUrl + "s");
  }

  public findByRchId(rchId: String): Observable<Patient> {
    return this.http.get<Patient>(this.patientsUrl + "/" + rchId);
  }

  public findBySamId(samId: String): Observable<Patient[]> {
//   console.log("SAMID: ", samId);
    return this.http.get<Patient[]>(this.childUrl + "/" + samId);
  }

  public findByCaseId(caseId: String): Observable<Patient> {
  //   console.log("SAMID: ", samId);
      return this.http.get<Patient>("http://localhost:8080/child/" + caseId);
    }

  public findByDischargeId(dischargeId: String): Observable<Patient> {
      return this.http.get<Patient>(this.patientsUrl + "/" + dischargeId)
  }

  public findDischargeById(dischargeId: String): Observable<Discharge> {
    return this.http.get<Discharge>(this.dischargeUrl + "/" + dischargeId)
  }

public findDischargeByCaseId(caseId: String): Observable<Discharge> {
    return this.http.get<Discharge>(this.dischargedPatientUrl + "d/" + caseId);
  }

  public getComorbid(dischargeId: String): Observable<String[]> {
  return this.http.get<String[]>(this.dischargedPatientUrl + "-comorbid/" + dischargeId);
  }

  public save(patient: Patient) {
    return this.http.post<Patient>(this.patientsUrl + "s", patient);
  }

  public getDischargedPatients(): Observable<DischargedPatient[]> {
     return this.http.get<DischargedPatient[]>(this.dischargedPatientUrl+"d-patient");
   }



   public approve(patient: Number) {
   console.log("approved: ",patient);
     return this.http.post<Number>(this.dischargedPatientUrl + "-approve", patient);
//        return this.http.post<Patient>(this.dischargedPatientUrl+"d-patient", patient);
//        return this.http.post<String>(this.dischargedPatientUrl+"-approve", caseId);
   }

   public trackChild(): Observable<Patient[]> {
       return this.http.get<Patient[]>("http://localhost:8080/track-child");
     }

}