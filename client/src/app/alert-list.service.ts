import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Alert} from './alert';

@Injectable()
export class AlertListService {

  private alertListSource = new BehaviorSubject(new Array<Alert>());
  currentList = this.alertListSource.asObservable();

  constructor() { }

  setList(alerts: Array<Alert>) {
    this.alertListSource.next(alerts);
  }

}
