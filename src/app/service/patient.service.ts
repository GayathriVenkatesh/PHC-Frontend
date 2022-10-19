import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from '../model/patient';
import { Discharge } from '../model/discharge';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable()
export class PatientService {

  private patientsUrl: string;
  private childUrl: string;
  private dischargeUrl: string;

  constructor(private http: HttpClient) {
    this.patientsUrl = 'http://localhost:8080/patient';
    this.dischargeUrl = 'http://localhost:8080/get-discharge';
    this.childUrl = 'http://localhost:8080/child-details';
  }

  public findAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientsUrl + "s");
  }

  public findByRchId(rchId: String): Observable<Patient> {
    return this.http.get<Patient>(this.patientsUrl + "/" + rchId);
  }

  public findBySamId(samId: String): Observable<Patient> {
    return this.http.get<Patient>(this.childUrl + "/" + samId);
  }

  public findByDischargeId(dischargeId: String): Observable<Patient> {
      return this.http.get<Patient>(this.patientsUrl + "/" + dischargeId)
  }

  public findDischargeById(dischargeId: String): Observable<Discharge> {
    return this.http.get<Discharge>(this.dischargeUrl + "/" + dischargeId)
  }

  public save(patient: Patient) {
    return this.http.post<Patient>(this.patientsUrl + "s", patient);
  }
}