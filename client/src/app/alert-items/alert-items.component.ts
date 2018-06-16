import { Component, OnInit } from '@angular/core';
import {AlertService} from '../alert.service';
import {Alert} from '../alert';
import {AlertListService} from '../alert-list.service';

@Component({
  selector: 'app-alert-items',
  templateUrl: './alert-items.component.html',
  styleUrls: ['./alert-items.component.css'],
  providers: [AlertService]
})
export class AlertItemsComponent implements OnInit {

  alertList = null;

  constructor(private alertService: AlertService,
              private alertListService: AlertListService) { }

  ngOnInit() {
    this.alertService.listAlerts().subscribe((alerts) => {
      this.alertList = alerts;
      this.alertListService.setList(this.alertList)
    });
  }

  alertDeleted(alert: Alert) {
    const newList = this.alertList.filter((element) => {
      return element._id !== alert._id;
    });
    this.alertList = newList;
  }

  alertAdded(alert: Alert) {
    this.alertList.push(alert);
    this.alertListService.setList(this.alertList);
  }

}
