import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AshaWorker } from '../model/asha-worker';
import { AshaChild } from '../model/asha-child';
import { url } from './url';

@Injectable({
  providedIn: 'root'
})
export class AshaWorkerService {
  private ashaUrl: string;
  private ashaChildUrl: string;

  constructor(private http: HttpClient) {
    this.ashaUrl = url + '/asha-worker';
    this.ashaChildUrl = url + '/Asha-child';
  }

  public findAll(): Observable<AshaWorker[]> {
    return this.http.get<AshaWorker[]>(this.ashaUrl);
  }

  public findByLocation(ward: String, area: String, pincode: String): Observable<AshaWorker[]> {
    console.log("area details", ward, area, pincode)
    return this.http.get<AshaWorker[]>(this.ashaUrl + '-search?ward=' + ward + '&area=' + area + '&pincode=' + pincode);
  }

  public findById(ashaId: String): Observable<AshaWorker>{
  return this.http.get<AshaWorker>(this.ashaUrl + '/' + ashaId);
  }

  public getAssigned(): Observable<Number[]>{
  return this.http.get<Number[]>(url + '/assigned-children');
  }

    public save(ashaChild: AshaChild) {
     console.log("hey", ashaChild);
    return this.http.post<Object>(this.ashaChildUrl, ashaChild);
  }
}
