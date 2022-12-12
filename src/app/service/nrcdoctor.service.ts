import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NrcDoctor } from '../model/nrcdoctor';
import { url } from './url';
// import { AshaChild } from '../model/asha-child';

@Injectable({
  providedIn: 'root'
})
export class NrcDoctorService {
  private nrcdoctorUrl: string;


  constructor(private http: HttpClient) {
    this.nrcdoctorUrl = url + '/nrc-doctor';
  }

  public findAll(): Observable<NrcDoctor[]> {
    return this.http.get<NrcDoctor[]>(this.nrcdoctorUrl+'s');
  }

  public findByUsername(username: String): Observable<NrcDoctor>{
  return this.http.get<NrcDoctor>(this.nrcdoctorUrl + '/' + username);
  }

}
