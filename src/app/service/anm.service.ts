import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../model/doctor';
import { url } from './url';
// import { AshaChild } from '../model/asha-child';

@Injectable({
  providedIn: 'root'
})
export class AnmService {
  private doctorUrl: string;


  constructor(private http: HttpClient) {
    this.doctorUrl = url + '/anm';
  }

  public findAll(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.doctorUrl+'s');
  }

  public findByUsername(username: String): Observable<Doctor>{
  return this.http.get<Doctor>(this.doctorUrl + '/' + username);
  }

}
