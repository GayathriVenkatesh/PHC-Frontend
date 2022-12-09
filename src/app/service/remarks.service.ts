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
import { Remarks } from '../model/remarks';


@Injectable({
  providedIn: 'root'
})
export class RemarksService {

  private remarksUrl: string;


  constructor(private http: HttpClient) {
    this.remarksUrl = url + '/remarks';

  }

  public findAll(): Observable<Remarks[]> {
    return this.http.get<Remarks[]>(this.remarksUrl);
  }


  public findByCaseId(caseId: String): Observable<Remarks[]> {
      return this.http.get<Remarks[]>(this.remarksUrl + "/" + caseId);
    }

  public save(remark: Remarks) {
    return this.http.post<Remarks>(this.remarksUrl, remark);
  }

   //public approve(patient: Number) {
   //console.log("approved: ",patient);
    // return this.http.post<Number>(this.dischargedPatientUrl + "-approve", patient);
//        return this.http.post<Patient>(this.dischargedPatientUrl+"d-patient", patient);
//        return this.http.post<String>(this.dischargedPatientUrl+"-approve", caseId);
   //}



}