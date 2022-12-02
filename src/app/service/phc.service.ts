import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../model/doctor';
import { PHC } from '../model/phc';
// import { AshaChild } from '../model/asha-child';
import { NRC } from '../model/nrc';
import { NrcService } from '../service/nrc.service';


@Injectable({
  providedIn: 'root'
})
export class PhcService {
  private phcUrl: string;


  constructor(private http: HttpClient) {
    this.phcUrl = 'http://localhost:8080/phc-details';
  }

  public findAll(): Observable<PHC[]> {
    return this.http.get<PHC[]>(this.phcUrl);
  }

  //public findByUsername(username: String): Observable<Doctor>{
  //return this.http.get<Doctor>(this.doctorUrl + '/' + username);
  //}


  public save(phc: PHC){
  return this.http.post<PHC>(this.phcUrl, phc);
  }

  public delete(phcId: number){
  return this.http.delete(this.phcUrl + "/" + phcId);
  }
}
