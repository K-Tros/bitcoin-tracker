import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Alert} from '../alert';
import {AlertService} from '../alert.service';

@Component({
  selector: 'app-alert-item',
  templateUrl: './alert-item.component.html',
  styleUrls: ['./alert-item.component.css']
})
export class AlertItemComponent implements OnInit {

  @Input() alert: Alert;
  @Output() alertDeleted = new EventEmitter<Alert>();

  constructor(private alertService: AlertService) { }

  ngOnInit() {
  }

  deleteAlert() {
    this.alertService.deleteAlert(this.alert).subscribe((res) => {
      this.alertDeleted.emit(this.alert);
    });
  }

}
