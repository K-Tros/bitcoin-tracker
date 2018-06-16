import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule,
  MatCheckboxModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { PriceComponent } from './price/price.component';
import {PriceService} from './price.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AlertItemComponent} from './alert-item/alert-item.component';
import {AddAlertComponent} from './add-alert/add-alert.component';
import {AlertService} from './alert.service';
import {AlertItemsComponent} from './alert-items/alert-items.component';
import {AlertListService} from './alert-list.service';


@NgModule({
  declarations: [
    AppComponent,
    PriceComponent,
    AlertItemComponent,
    AddAlertComponent,
    AlertItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    PriceService,
    AlertService,
    AlertListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
