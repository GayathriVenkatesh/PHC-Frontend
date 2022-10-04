import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Followup } from '../model/followup';
import { Observable } from 'rxjs';

@Injectable()
export class FollowupService {

  private followupsUrl: string;

  constructor(private http: HttpClient) {
    this.followupsUrl = 'http://localhost:8082/followup';
  }

  public findAll(): Observable<Followup[]> {
    return this.http.get<Followup[]>(this.followupsUrl + "-list");
  }

  public findByFollowupId(followupId: Number): Observable<Followup> {
    return this.http.get<Followup>(this.followupsUrl + "/" + followupId);
  }

  public findBySamId(samId: String): Observable<Followup> {
    return this.http.get<Followup>(this.followupsUrl + "s/" + samId);
  }

  // public save(followup: Followup) {
  //   return this.http.post<Followup>(this.followupsUrl + "s", followup);
  // }
}