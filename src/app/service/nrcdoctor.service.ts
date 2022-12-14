import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NrcDoctor } from '../model/nrc-doctor';
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

  public save(doctor: NrcDoctor){
    return this.http.post<NrcDoctor>(this.nrcdoctorUrl+'s', doctor);
    }

  public deactivate(id: number){
          return this.http.post(url + '/nrc-doctor-deactivate', id)
      }

}
