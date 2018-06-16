import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Alert} from './alert';
import { environment } from '../environments/environment';

@Injectable()
export class AlertService {

  constructor(private httpClient: HttpClient) { }

  listAlerts(): Observable<Array<Alert>> {
    return this.httpClient.get<any>(environment.apiurl + 'api/alert-items');
  }

  createAlert(alert: Alert): Observable<any> {
    return this.httpClient.post<any>(environment.apiurl + 'api/alert-items', alert);
  }

  deleteAlert(alert: Alert): Observable<any> {
    return this.httpClient.delete<any>(environment.apiurl + 'api/alert-items/' + alert._id);
  }

}
