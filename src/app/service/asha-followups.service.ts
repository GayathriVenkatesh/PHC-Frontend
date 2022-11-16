import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AshaWorker } from '../model/asha-worker';
import { AshaChild } from '../model/asha-child';
import { FollowupSchedule } from '../model/followup-schedule';
import { Followup } from '../model/followup';

@Injectable({
  providedIn: 'root'
})
export class AshaFollowupsService {
  private ashaUrl: string;
  private ashaChildUrl: string;

  constructor(private http: HttpClient) {
    this.ashaUrl = 'http://localhost:8080/asha-followup';

  }

  public findById(ashaId: String): Observable<FollowupSchedule[]>{
  return this.http.get<FollowupSchedule[]>(this.ashaUrl + '-schedule/' + ashaId);
  }

  public getFollowups(caseId: String): Observable<Followup[]>{
  return this.http.get<Followup[]>('http://localhost:8080/asha-patient-followup/' + caseId);
  }



}
