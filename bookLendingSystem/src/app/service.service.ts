import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getTableList (): Observable<any> {
    return this.http.get('dataTable/data');
  }
  submitRentDetails(requestBody): Observable<any> {
    return this.http.post('data/rent/detail', requestBody);
  }
  submitReturnDetails(form): Observable<any> {
    return this.http.post('data/return/detail', form);
  }

}
