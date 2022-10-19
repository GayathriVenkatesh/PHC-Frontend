import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AshaWorker } from '../model/asha-worker';

@Injectable({
  providedIn: 'root'
})
export class AshaWorkerService {
  private ashaUrl: string;

  constructor(private http: HttpClient) {
    this.ashaUrl = 'http://localhost:8080/asha-worker';
  }

  public findAll(): Observable<AshaWorker[]> {
    return this.http.get<AshaWorker[]>(this.ashaUrl);
  }

  public findByLocation(ward: String, area: String, pincode: String): Observable<AshaWorker[]> {
    console.log("area details", ward, area, pincode)
    return this.http.get<AshaWorker[]>(this.ashaUrl + '-search?ward=' + ward + '&area=' + area + '&pincode=' + pincode);
  }
}
