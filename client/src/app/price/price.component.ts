import { Component, OnInit } from '@angular/core';
import {PriceService} from '../price.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import {AlertListService} from '../alert-list.service';
import {Alert} from '../alert';
import { NotificationsService } from 'angular2-notifications';
import {MatCheckboxChange} from '@angular/material';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  price: number;
  alertList: Array<Alert>;
  previousPrice: number;

  // test mode flag to send the price up to 1,000,000 once, then back to 0 once, and then turn off
  testMode = false;

  constructor(private priceService: PriceService,
              private alertListService: AlertListService,
              private notificationsService: NotificationsService) { }

  ngOnInit() {
    Observable.interval(1000)
      .subscribe(() => this.refreshPrice());
    this.alertListService.currentList.subscribe(alertList => this.alertList = alertList)
  }

  private refreshPrice(): void {
    if (!this.testMode) {
      this.priceService.getPrice()
        .subscribe(value => {
          this.previousPrice = this.price;
          this.price = value.USD.buy;
        });
    }
    else if (this.price == 0) {
      this.previousPrice = 0;
      this.price = 1000000;
    }
    else {
      this.previousPrice = 1000000;
      this.price = 0;
    }

    this.priceCompare();
  }

  private priceCompare(): void {
    if (this.previousPrice != this.price) {
      let movedUpward = this.price - this.previousPrice > 0;
      this.alertList.forEach(alert => {;
        if ((movedUpward && alert.isUpward && alert.price > this.previousPrice && alert.price < this.price)
          || (!movedUpward && !alert.isUpward && alert.price > this.price && alert.price < this.previousPrice)) {
          // log alert
          let directionText = movedUpward ? 'up' : 'down';
          this.notificationsService.alert('Threshold passed!', alert.price + ' passed going ' + directionText);
        }
      })
    }
  }

  checkBoxOnChange() {
    this.testMode = !this.testMode;
  }

}
