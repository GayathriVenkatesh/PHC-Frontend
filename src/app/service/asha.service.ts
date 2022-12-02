import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asha } from '../model/asha';
import { url } from './url';

@Injectable({
  providedIn: 'root'
})
export class AshaService {
  private ashaUrl: string;


  constructor(private http: HttpClient) {
    this.ashaUrl = url + '/asha';
  }

  public findAll(): Observable<Asha[]> {
    return this.http.get<Asha[]>(this.ashaUrl);
  }

  public findByUsername(username: String): Observable<Asha>{
  return this.http.get<Asha>(this.ashaUrl + '/' + username);
  }

}
