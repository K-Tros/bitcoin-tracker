webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-alert/add-alert.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-alert/add-alert.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <mat-form-field class=\"col\">\n    <input matInput id=\"alertPrice\" required type=\"number\"\n           [(ngModel)]=\"alert.price\" name=\"alertPrice\">\n    <mat-placeholder>Alert Threshold</mat-placeholder>\n  </mat-form-field>\n  <mat-radio-group matInput required [(ngModel)]=\"alert.isUpward\" name=\"alertDirection\">\n    <mat-radio-button value=\"1\">Up</mat-radio-button>\n    <mat-radio-button value=\"0\">Down</mat-radio-button>\n  </mat-radio-group>\n  <button mat-raised-button (click)=\"onSubmit()\"\n          class=\"btn btn-success\" [disabled]=\"!isEnabled()\">\n    Save\n  </button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/add-alert/add-alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert__ = __webpack_require__("../../../../../src/app/alert.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_service__ = __webpack_require__("../../../../../src/app/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddAlertComponent = /** @class */ (function () {
    function AddAlertComponent(alertService) {
        this.alertService = alertService;
        this.alertAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AddAlertComponent.prototype.ngOnInit = function () {
        this.alert = new __WEBPACK_IMPORTED_MODULE_2__alert__["a" /* Alert */](null, null);
    };
    AddAlertComponent.prototype.onSubmit = function () {
        var _this = this;
        // make sure to get the id after the post before emitting the new alert
        this.alertService.createAlert(this.alert).subscribe(function (newAlert) {
            _this.alertAdded.emit(newAlert);
        });
    };
    AddAlertComponent.prototype.isEnabled = function () {
        return this.alert.price && !Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(this.alert.isUpward);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AddAlertComponent.prototype, "alertAdded", void 0);
    AddAlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-alert',
            template: __webpack_require__("../../../../../src/app/add-alert/add-alert.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-alert/add-alert.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__alert_service__["a" /* AlertService */]])
    ], AddAlertComponent);
    return AddAlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/alert-item/alert-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn {\r\n  margin: 10px\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alert-item/alert-item.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-list-item>\n  <strong>${{ alert.price }}</strong>&nbsp;\n  <strong *ngIf=\"alert.isUpward\">Direction: Up</strong>\n  <strong *ngIf=\"!alert.isUpward\">Direction: Down</strong>\n  <button class=\"btn btn-danger\" (click)=\"deleteAlert()\">Delete</button>\n</mat-list-item>\n"

/***/ }),

/***/ "../../../../../src/app/alert-item/alert-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert__ = __webpack_require__("../../../../../src/app/alert.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_service__ = __webpack_require__("../../../../../src/app/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertItemComponent = /** @class */ (function () {
    function AlertItemComponent(alertService) {
        this.alertService = alertService;
        this.alertDeleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AlertItemComponent.prototype.ngOnInit = function () {
    };
    AlertItemComponent.prototype.deleteAlert = function () {
        var _this = this;
        this.alertService.deleteAlert(this.alert).subscribe(function (res) {
            _this.alertDeleted.emit(_this.alert);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__alert__["a" /* Alert */])
    ], AlertItemComponent.prototype, "alert", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AlertItemComponent.prototype, "alertDeleted", void 0);
    AlertItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alert-item',
            template: __webpack_require__("../../../../../src/app/alert-item/alert-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/alert-item/alert-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__alert_service__["a" /* AlertService */]])
    ], AlertItemComponent);
    return AlertItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/alert-items/alert-items.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n  margin: 2em auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alert-items/alert-items.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <mat-card class=\"card row\">\n    <mat-card-title class=\"text-center\">Add Alert</mat-card-title>\n    <mat-card-content class=\"text-center\">\n      <app-add-alert (alertAdded)=\"alertAdded($event)\"></app-add-alert>\n    </mat-card-content>\n  </mat-card>\n  <mat-card class=\"card row\">\n    <mat-card-title class=\"text-center\">Alert List</mat-card-title>\n    <mat-card-content class=\"text-center\">\n      <mat-list>\n        <app-alert-item *ngFor=\"let alertObject of alertList\"\n                       [alert]=\"alertObject\"\n                       (alertDeleted)=\"alertDeleted($event)\"></app-alert-item>\n      </mat-list>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/alert-items/alert-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_service__ = __webpack_require__("../../../../../src/app/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_list_service__ = __webpack_require__("../../../../../src/app/alert-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertItemsComponent = /** @class */ (function () {
    function AlertItemsComponent(alertService, alertListService) {
        this.alertService = alertService;
        this.alertListService = alertListService;
        this.alertList = null;
    }
    AlertItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.listAlerts().subscribe(function (alerts) {
            _this.alertList = alerts;
            _this.alertListService.setList(_this.alertList);
        });
    };
    AlertItemsComponent.prototype.alertDeleted = function (alert) {
        var newList = this.alertList.filter(function (element) {
            return element._id !== alert._id;
        });
        this.alertList = newList;
    };
    AlertItemsComponent.prototype.alertAdded = function (alert) {
        this.alertList.push(alert);
        this.alertListService.setList(this.alertList);
    };
    AlertItemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alert-items',
            template: __webpack_require__("../../../../../src/app/alert-items/alert-items.component.html"),
            styles: [__webpack_require__("../../../../../src/app/alert-items/alert-items.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__alert_service__["a" /* AlertService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_2__alert_list_service__["a" /* AlertListService */]])
    ], AlertItemsComponent);
    return AlertItemsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/alert-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertListService = /** @class */ (function () {
    function AlertListService() {
        this.alertListSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new Array());
        this.currentList = this.alertListSource.asObservable();
    }
    AlertListService.prototype.setList = function (alerts) {
        this.alertListSource.next(alerts);
    };
    AlertListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AlertListService);
    return AlertListService;
}());



/***/ }),

/***/ "../../../../../src/app/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(httpClient) {
        this.httpClient = httpClient;
    }
    AlertService.prototype.listAlerts = function () {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiurl + 'api/alert-items');
    };
    AlertService.prototype.createAlert = function (alert) {
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiurl + 'api/alert-items', alert);
    };
    AlertService.prototype.deleteAlert = function (alert) {
        return this.httpClient.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiurl + 'api/alert-items/' + alert._id);
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "../../../../../src/app/alert.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alert; });
var Alert = /** @class */ (function () {
    function Alert(price, isUpward) {
        this.price = price;
        this.isUpward = isUpward;
    }
    return Alert;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<simple-notifications></simple-notifications>\n<app-price></app-price>\n<app-alert-items></app-alert-items>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__price_price_component__ = __webpack_require__("../../../../../src/app/price/price.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__price_service__ = __webpack_require__("../../../../../src/app/price.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__alert_item_alert_item_component__ = __webpack_require__("../../../../../src/app/alert-item/alert-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__add_alert_add_alert_component__ = __webpack_require__("../../../../../src/app/add-alert/add-alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__alert_service__ = __webpack_require__("../../../../../src/app/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__alert_items_alert_items_component__ = __webpack_require__("../../../../../src/app/alert-items/alert-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__alert_list_service__ = __webpack_require__("../../../../../src/app/alert-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__price_price_component__["a" /* PriceComponent */],
                __WEBPACK_IMPORTED_MODULE_10__alert_item_alert_item_component__["a" /* AlertItemComponent */],
                __WEBPACK_IMPORTED_MODULE_11__add_alert_add_alert_component__["a" /* AddAlertComponent */],
                __WEBPACK_IMPORTED_MODULE_13__alert_items_alert_items_component__["a" /* AlertItemsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["SimpleNotificationsModule"].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__price_service__["a" /* PriceService */],
                __WEBPACK_IMPORTED_MODULE_12__alert_service__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_14__alert_list_service__["a" /* AlertListService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/price.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PriceService = /** @class */ (function () {
    function PriceService(httpClient) {
        this.httpClient = httpClient;
        this.basePath = 'https://blockchain.info';
    }
    PriceService.prototype.getPrice = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        var httpHeaderAccepts = [
            'application/json',
        ];
        headers = headers.set('Accept', httpHeaderAccepts);
        // Hits an external API, so don't use the url in environments
        return this.httpClient.get(this.basePath + "/ticker", {
            headers: headers
        });
    };
    PriceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PriceService);
    return PriceService;
}());



/***/ }),

/***/ "../../../../../src/app/price/price.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/price/price.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Current Bitcoin Price: ${{price}}</h1>\n<mat-checkbox (change)=\"checkBoxOnChange()\">Enable test mode</mat-checkbox>\n"

/***/ }),

/***/ "../../../../../src/app/price/price.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__price_service__ = __webpack_require__("../../../../../src/app/price.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_list_service__ = __webpack_require__("../../../../../src/app/alert-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_notifications__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PriceComponent = /** @class */ (function () {
    function PriceComponent(priceService, alertListService, notificationsService) {
        this.priceService = priceService;
        this.alertListService = alertListService;
        this.notificationsService = notificationsService;
        // test mode flag to send the price up to 1,000,000 once, then back to 0 once, and then turn off
        this.testMode = false;
    }
    PriceComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].interval(1000)
            .subscribe(function () { return _this.refreshPrice(); });
        this.alertListService.currentList.subscribe(function (alertList) { return _this.alertList = alertList; });
    };
    PriceComponent.prototype.refreshPrice = function () {
        var _this = this;
        if (!this.testMode) {
            this.priceService.getPrice()
                .subscribe(function (value) {
                _this.previousPrice = _this.price;
                _this.price = value.USD.buy;
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
    };
    PriceComponent.prototype.priceCompare = function () {
        var _this = this;
        if (this.previousPrice != this.price) {
            var movedUpward_1 = this.price - this.previousPrice > 0;
            this.alertList.forEach(function (alert) {
                ;
                if ((movedUpward_1 && alert.isUpward && alert.price > _this.previousPrice && alert.price < _this.price)
                    || (!movedUpward_1 && !alert.isUpward && alert.price > _this.price && alert.price < _this.previousPrice)) {
                    // log alert
                    var directionText = movedUpward_1 ? 'up' : 'down';
                    _this.notificationsService.alert('Threshold passed!', alert.price + ' passed going ' + directionText);
                }
            });
        }
    };
    PriceComponent.prototype.checkBoxOnChange = function () {
        this.testMode = !this.testMode;
    };
    PriceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-price',
            template: __webpack_require__("../../../../../src/app/price/price.component.html"),
            styles: [__webpack_require__("../../../../../src/app/price/price.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__price_service__["a" /* PriceService */],
            __WEBPACK_IMPORTED_MODULE_4__alert_list_service__["a" /* AlertListService */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"]])
    ], PriceComponent);
    return PriceComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiurl: '/'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map