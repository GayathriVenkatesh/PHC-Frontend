import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from '../model/patient';
import { Discharge } from '../model/discharge';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map, filter, switchMap, delay } from 'rxjs/operators';
import { DischargedPatient } from '../model/discharged-patient';
import { url } from './url';
import { SdRange } from '../model/sd-range';
import { RejectPhc } from '../model/reject-phc';
import { Comorbidities } from '../model/comorbidities';

@Injectable()
export class PatientService {

  private patientsUrl: string;
  private childUrl: string;
  private dischargeUrl: string;
  private dischargedPatientUrl: string;

  constructor(private http: HttpClient) {
    this.patientsUrl = url + '/patient';
    this.dischargeUrl = url + '/get-discharge';
    this.childUrl = url + '/child-details';
    this.dischargedPatientUrl = url + '/discharge';
  }

  public findAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientsUrl + "s");
  }

    public findAllPhc(phcId: String): Observable<Patient[]> {
      return this.http.get<Patient[]>(this.patientsUrl + "s/"+phcId);
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
      return this.http.get<Patient>(url + "/child/" + caseId);
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
    //delay(7000);
    //let l: DischargedPatient[] = [
      //{name: 'aaru', address: 'ytfghjgfc vbnkjjfd xcvbnkdu iut fghj iugjhki iughkjiuygh uighuuifhg uifghgh uyghkiuyh iugyhiuyhg', mobileNumber: '8765456', pincode: '786763', caseId: 1, samId: 1, rchId: 4, date: new Date()},
      //{name: 'gayu', address: 'hsr', mobileNumber: '8765456', pincode: '786763', caseId: 1, samId: 1, rchId: 2, date: new Date("2019-01-16")}
     //]
     //return of(l);
   }

   public getDischargedPatientsPhc(phcId: String): Observable<DischargedPatient[]> {
      return this.http.get<DischargedPatient[]>(this.dischargedPatientUrl+"d-patient/"+phcId);
    }



   public approve(patient: Number) {
   console.log("approved: ",patient);
     return this.http.post<Number>(this.dischargedPatientUrl + "-approve", patient);
//        return this.http.post<Patient>(this.dischargedPatientUrl+"d-patient", patient);
//        return this.http.post<String>(this.dischargedPatientUrl+"-approve", caseId);
   }

      public reject(patient: Number) {
      console.log("rejected: ",patient);
        return this.http.post<Number>(this.dischargedPatientUrl + "-reject", patient);
   //        return this.http.post<Patient>(this.dischargedPatientUrl+"d-patient", patient);
   //        return this.http.post<String>(this.dischargedPatientUrl+"-approve", caseId);
      }

      public rejectPhc(reject: RejectPhc) {
            console.log("rejected: ",reject);
            return this.http.post<Number>(url + "/reject-phc", reject);
         //        return this.http.post<Patient>(this.dischargedPatientUrl+"d-patient", patient);
         //        return this.http.post<String>(this.dischargedPatientUrl+"-approve", caseId);
            }

   public trackChild(): Observable<Patient[]> {
       return this.http.get<Patient[]>(url + "/track-child");
     }

     public trackChildPhc(phc: String): Observable<Patient[]> {
            return this.http.get<Patient[]>(url + "/track-child/" + phc);
          }

    public getComorbidities(): Observable<Comorbidities[]> {
         return this.http.get<Comorbidities[]>(url + "/comorbidities");
       }

    public getSdRange(caseId: String): Observable<SdRange[]> {
     return this.http.get<SdRange[]>(url + "/sd-range/" + caseId);
        }
}