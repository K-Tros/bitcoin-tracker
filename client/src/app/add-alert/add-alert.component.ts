import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { isNullOrUndefined } from 'util';
import {Alert} from '../alert';
import {AlertService} from '../alert.service';

@Component({
  selector: 'app-add-alert',
  templateUrl: './add-alert.component.html',
  styleUrls: ['./add-alert.component.css']
})
export class AddAlertComponent implements OnInit {

  alert: Alert;
  @Output() alertAdded = new EventEmitter<Alert>();

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alert = new Alert(null, null);
  }

  onSubmit() {
    // make sure to get the id after the post before emitting the new alert
    this.alertService.createAlert(this.alert).subscribe((newAlert) => {
      this.alertAdded.emit(newAlert);
    });
  }

  isEnabled(): boolean {
    return this.alert.price && !isNullOrUndefined(this.alert.isUpward);
  }

}
