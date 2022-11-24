import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Followup } from '../model/followup';
import { Observable } from 'rxjs';
import { FollowupDate } from '../model/followup-dates';
import { FollowupSched } from '../model/followup-sched';
import { FollowupSchedule } from '../model/followup-schedule';


@Injectable()
export class FollowupService {

  private followupsUrl: string;

  constructor(private http: HttpClient) {
    this.followupsUrl = 'http://localhost:8080/followup';
  }

  public findAll(): Observable<Followup[]> {
    return this.http.get<Followup[]>(this.followupsUrl + "-list");
  }

//   public findByFollowupId(followupId: Number): Observable<Followup> {
//     return this.http.get<Followup>(this.followupsUrl + "/" + followupId);
//   }

  public findBySamId(samId: String): Observable<Followup> {
    return this.http.get<Followup>(this.followupsUrl + "s/" + samId);
  }

  public findFollowupSchedule(): Observable<FollowupSchedule[]> {
    return this.http.get<FollowupSchedule[]>(this.followupsUrl + "-schedule");
  }

  public findFollowupSchedulePhc(phcId: String): Observable<FollowupSchedule[]> {
      return this.http.get<FollowupSchedule[]>(this.followupsUrl + "-schedule/"+phcId);
    }

  public getFollowupScheduleById(caseId: String): Observable<FollowupSchedule[]> {
      return this.http.get<FollowupSchedule[]>(this.followupsUrl + "s-schedule/" + caseId);
    }

  public findByCaseId(caseId: String): Observable<FollowupDate[]> {
  return this.http.get<FollowupDate[]>(this.followupsUrl + "-dates/" + caseId);
  }

  public findByFollowupId(followupId: number): Observable<Followup> {
  return this.http.get<Followup>(this.followupsUrl + "/" + followupId);
  }



  public findLast(): Observable<Followup> {
    return this.http.get<Followup>(this.followupsUrl + "/last");
    }

  public save(followup: Followup) {
    return this.http.post<Followup>(this.followupsUrl, followup);
  }

  public saveFollowup(followupSchedule: FollowupSched) {
  console.log("HELLO bello",followupSchedule );
      return this.http.post<FollowupSched>(this.followupsUrl + "-schedule", followupSchedule);
    }

    public update(scheduleId: Number) {
        return this.http.post<String>(this.followupsUrl+"-update", scheduleId);
      }

  // public save(followup: Followup) {
  //   return this.http.post<Followup>(this.followupsUrl + "s", followup);
  // }
}