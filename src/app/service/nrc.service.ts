import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../model/doctor';
import { PHC } from '../model/phc';
import { NRC } from '../model/nrc';
import { url } from './url';
// import { AshaChild } from '../model/asha-child';

@Injectable({
  providedIn: 'root'
})
export class NrcService {
  private nrcUrl: string;


  constructor(private http: HttpClient) {
    this.nrcUrl = url + '/nrc-details';
  }

  public findAll(): Observable<NRC[]> {
    return this.http.get<NRC[]>(this.nrcUrl);
  }

  //public findByUsername(username: String): Observable<Doctor>{
  //return this.http.get<Doctor>(this.doctorUrl + '/' + username);
  //}

    public deactivate(nrcId: number){
    console.log("GG", nrcId);
        return this.http.post(url + '/nrc-deactivate', nrcId)
    }

  public save(nrc: NRC){
  return this.http.post<NRC>(this.nrcUrl, nrc);
  }

  public delete(nrcId: number){
  return this.http.delete(this.nrcUrl + "/" + nrcId);
  }
}
