(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patients-patient-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patient-create/patient-create.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patient-create/patient-create.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n  <mat-card fxFlex=\"87%\" fxFlex.xs=\"100%\" style=\"border: 1;\">\r\n\r\n    <mat-card-title fxLayoutAlign=\"center center\">Register a new Patient</mat-card-title>\r\n\r\n    <form [formGroup]=\"registerForm\" autocomplete=\"off\" novalidate (ngSubmit)=\"register(registerForm.value)\">\r\n\r\n      <mat-card-content fxLayout=\"column wrap\">\r\n\r\n        <div flex fxLayoutGap=\"30px\">\r\n          <mat-label><b>Patient Name</b></mat-label><br>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"FirstName\" formControlName=\"firstName\" id=\"firstName\">\r\n            <mat-hint align=\"left\">Not more then 50 characters long.</mat-hint>\r\n            <mat-error *ngIf=\"hasError('firstName', 'required')\">Name is required</mat-error>\r\n            <mat-error *ngIf=\"hasError('firstName', 'maxlength')\">You have more than 50 characters</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"LastName\" formControlName=\"lastName\" id=\"lastName\">\r\n            <mat-hint align=\"left\">Not more then 50 characters long.</mat-hint>\r\n            <mat-error *ngIf=\"hasError('lastName', 'required')\">Last Name is required</mat-error>\r\n            <mat-error *ngIf=\"hasError('lastName', 'maxlength')\">You have more than 50 characters</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <br>\r\n        <div flex fxLayoutGap=\"30px\">\r\n          <mat-label><b>Postal Address</b></mat-label><br>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Line1\" formControlName=\"line1\" id=\"line1\">\r\n            <mat-hint align=\"left\">Not more then 150 characters long.</mat-hint>\r\n            <mat-error *ngIf=\"hasError('line1', 'required')\">Address Line 1 is required</mat-error>\r\n            <mat-error *ngIf=\"hasError('line1', 'maxlength')\">You have more than 150 characters</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Line2\" formControlName=\"line2\" id=\"line2\">\r\n            <mat-hint align=\"left\">Not more then 150 characters long.</mat-hint>\r\n            <mat-error *ngIf=\"hasError('line2', 'required')\">Address Line 2 is required</mat-error>\r\n            <mat-error *ngIf=\"hasError('line2', 'maxlength')\">You have more than 150 characters</mat-error>\r\n          </mat-form-field>\r\n          <br>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"City\" formControlName=\"city\" id=\"city\">\r\n            <mat-hint align=\"left\">Not more then 50 characters long.</mat-hint>\r\n            <mat-error *ngIf=\"hasError('city', 'required')\">City is required</mat-error>\r\n            <mat-error *ngIf=\"hasError('city', 'maxlength')\">You have more than 50 characters</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"State\" formControlName=\"state\" id=\"state\">\r\n            <mat-hint align=\"left\">Not more then 50 characters long.</mat-hint>\r\n            <mat-error *ngIf=\"hasError('state', 'required')\">State is required</mat-error>\r\n            <mat-error *ngIf=\"hasError('state', 'maxlength')\">You have more than 50 characters</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Zip\" formControlName=\"zip\" id=\"zip\">\r\n            <mat-hint align=\"left\">Not more then 6 characters long.</mat-hint>\r\n            <mat-error *ngIf=\"hasError('zip', 'required')\">Zip is required</mat-error>\r\n            <mat-error *ngIf=\"hasError('zip', 'maxlength')\">You have more than 6 characters</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <br>\r\n        <div flex fxLayoutGap=\"30px\">\r\n          <mat-label>Gender</mat-label>\r\n          <mat-radio-group formControlName=\"gender\" id=\"gender\">\r\n            <mat-radio-button *ngFor=\"let item of genders\" [value]=\"item.value\">\r\n              {{item.option}}\r\n              &nbsp;\r\n            </mat-radio-button>\r\n          </mat-radio-group>\r\n          <br>\r\n          <mat-hint align=\"left\" class=\"mat-hint-style\">Gender is required</mat-hint>\r\n        </div>\r\n        <div>\r\n          <mat-form-field>\r\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Select Date of Birth\" formControlName=\"dateOfBirth\"\r\n              id=\"dateOfBirth\" readonly (click)=\"picker.open()\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n            <mat-hint align=\"left\">Date of Birth is required</mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n        <br>\r\n        <div flex fxLayoutGap=\"30px\">\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Email\" formControlName=\"mailId\" id=\"mailId\">\r\n            <mat-hint align=\"left\">Not more then 60 characters long.</mat-hint>\r\n            <mat-error *ngIf=\"hasError('mailId', 'required')\">Mailid is required</mat-error>\r\n            <mat-error *ngIf=\"hasError('mailId', 'maxlength')\">You have more than 60 characters</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"PhoneNo\" formControlName=\"phone\" id=\"phone\">\r\n            <mat-hint align=\"left\">Not more then 6 characters long.</mat-hint>\r\n            <mat-error *ngIf=\"hasError('phone', 'required')\">Phone Number is required</mat-error>\r\n            <mat-error *ngIf=\"hasError('phone', 'maxlength')\">You have more than 10 characters</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <br>\r\n        <div flex fxLayoutGap=\"30px\">\r\n          <mat-label>Marital Status</mat-label>\r\n          <mat-radio-group formControlName=\"maritalStatus\" id=\"maritalStatus\">\r\n            <mat-radio-button *ngFor=\"let item of marital_status\" [value]=\"item.value\">\r\n              {{item.option}}\r\n              &nbsp;\r\n            </mat-radio-button>\r\n          </mat-radio-group>\r\n          <br>\r\n          <mat-hint align=\"left\" class=\"mat-hint-style\">Marital Status is required</mat-hint>\r\n        </div>\r\n        <br>\r\n        <div flex fxLayoutGap=\"30px\">\r\n          <mat-label>Medical History</mat-label>\r\n          <ng-container *ngFor=\"let item of disease_type; let i = index\">\r\n            <mat-checkbox (change)=\"onChange($event)\" [value]=\"item.name\">{{item.name}}\r\n            </mat-checkbox>\r\n          </ng-container>\r\n          <br>\r\n          <mat-hint align=\"left\" class=\"mat-hint-style\">Medical History is required</mat-hint>\r\n        </div>\r\n\r\n      </mat-card-content>\r\n\r\n      <mat-card-actions style=\"text-align: center;\">\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"!registerForm.valid\">Register</button>\r\n        <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"loginForm.reset()\">Reset</button>\r\n      </mat-card-actions>\r\n\r\n    </form>\r\n\r\n  </mat-card>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patient-details/patient-details.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patient-details/patient-details.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n  <mat-card fxFlex=\"87%\" fxFlex.xs=\"100%\" style=\"border: 1;\">\r\n\r\n    <mat-card-title fxLayoutAlign=\"center center\">Registered Patient Details</mat-card-title>\r\n\r\n    <form [formGroup]=\"registerForm\" autocomplete=\"off\" novalidate>\r\n\r\n      <mat-card-content fxLayout=\"column wrap\">\r\n\r\n        <div flex fxLayoutGap=\"30px\">\r\n          <mat-label><b>Patient Name</b></mat-label><br>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"FirstName\" formControlName=\"firstName\" id=\"firstName\">\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"LastName\" formControlName=\"lastName\" id=\"lastName\">\r\n          </mat-form-field>\r\n        </div>\r\n        <br>\r\n        <div flex fxLayoutGap=\"30px\">\r\n          <mat-label><b>Postal Address</b></mat-label><br>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Line1\" formControlName=\"line1\" id=\"line1\">\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Line2\" formControlName=\"line2\" id=\"line2\">\r\n          </mat-form-field>\r\n          <br>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"City\" formControlName=\"city\" id=\"city\">\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"State\" formControlName=\"state\" id=\"state\">\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Zip\" formControlName=\"zip\" id=\"zip\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div flex fxLayoutGap=\"30px\">\r\n          <mat-label>Gender</mat-label>\r\n          <mat-radio-group formControlName=\"gender\" id=\"gender\">\r\n            <mat-radio-button *ngFor=\"let item of genders\" [checked]=\"item.checked\" [value]=\"item.value\">\r\n              {{item.option}}\r\n              &nbsp;\r\n            </mat-radio-button>\r\n          </mat-radio-group>\r\n        </div>\r\n        <br>\r\n        <div>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Date of Birth\" formControlName=\"dateOfBirth\"\r\n              id=\"dateOfBirth\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div flex fxLayoutGap=\"30px\">\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Email\" formControlName=\"mailId\" id=\"mailId\">\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"PhoneNo\" formControlName=\"phone\" id=\"phone\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div flex fxLayoutGap=\"30px\">\r\n          <mat-label>Marital Status</mat-label>\r\n          <mat-radio-group formControlName=\"maritalStatus\" id=\"maritalStatus\">\r\n            <mat-radio-button *ngFor=\"let item of marital_status\" [checked]=\"item.checked\" [value]=\"item.value\">\r\n              {{item.option}}\r\n              &nbsp;\r\n            </mat-radio-button>\r\n          </mat-radio-group>\r\n        </div>\r\n        <br>\r\n        <div flex fxLayoutGap=\"30px\">\r\n          <mat-label>Medical History</mat-label>\r\n          <ng-container *ngFor=\"let item of disease_type; let i = index\">\r\n            <mat-checkbox [checked]=\"item.checked\" [value]=\"item.name\" disabled=\"true\">{{item.name}}\r\n            </mat-checkbox>\r\n          </ng-container>\r\n        </div>\r\n\r\n      </mat-card-content>\r\n\r\n      <mat-card-actions style=\"text-align: center;\">\r\n        <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"onCancel()\">Cancel</button>\r\n      </mat-card-actions>\r\n\r\n    </form>\r\n\r\n  </mat-card>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patient-list/patient-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patient-list/patient-list.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout fxLayout.lt-md=\"column wrap\" fxLayoutAlign=\"center center\" fxLayoutGap.gt-sm=\"250px\"\r\n    fxLayoutGap.lt.md=\"20px\">\r\n    <mat-form-field>\r\n        <input matInput type=\"text\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter Record\">\r\n    </mat-form-field>\r\n</div>\r\n\r\n<table mat-table [dataSource]=\"dataSource\" matSort>\r\n    <!--ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header width=\"150px\">ID</th>\r\n        <td mat-cell *matCellDef=\"let patient\">{{patient.id }}</td>\r\n    </ng-container-->\r\n    <ng-container matColumnDef=\"patientName\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header width=\"200px\">PatientName</th>\r\n        <td mat-cell *matCellDef=\"let patient\">{{patient.patientName.firstName}}&nbsp;{{patient.patientName.lastName}}\r\n        </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"postalAddress\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header width=\"200px\">PostalAddress</th>\r\n        <td mat-cell *matCellDef=\"let patient\">\r\n            {{patient.postalAddress.line1}}<br>\r\n            {{patient.postalAddress.line2}}<br>\r\n            {{patient.postalAddress.city}}, {{patient.postalAddress.state}}<br>\r\n            {{patient.postalAddress.zip}}\r\n        </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"gender\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header width=\"100px\">Gender</th>\r\n        <td mat-cell *matCellDef=\"let patient\">{{patient.gender}}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"dateOfBirth\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header width=\"100px\">Date of Birth</th>\r\n        <td mat-cell *matCellDef=\"let patient\">{{patient.dateOfBirth}}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"mailId\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header width=\"200px\">MailID</th>\r\n        <td mat-cell *matCellDef=\"let patient\">{{patient.mailId}}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"phone\">\r\n        <th mat-header-cell *matHeaderCellDef width=\"100px\">PhoneNo</th>\r\n        <td mat-cell *matCellDef=\"let patient\">{{patient.phone}}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"maritalStatus\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header width=\"100px\">MaritalStatus</th>\r\n        <td mat-cell *matCellDef=\"let patient\">{{patient.maritalStatus}}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"medicalHistory\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>MedicalHistory</th>\r\n        <td mat-cell *matCellDef=\"let patient\">{{patient.medHistory}}</td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"details\">\r\n        <th mat-header-cell *matHeaderCellDef width=\"100px\">Details</th>\r\n        <td mat-cell *matCellDef=\"let patient\">\r\n            <button mat-icon-button color=\"primary\" (click)=\"redirectToDetails(patient.id)\">\r\n                <mat-icon class=\"mat-18\">reorder</mat-icon>\r\n            </button>\r\n        </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"update\">\r\n        <th mat-header-cell *matHeaderCellDef width=\"100px\">Update</th>\r\n        <td mat-cell *matCellDef=\"let patient\">\r\n            <button mat-icon-button color=\"accent\" (click)=\"redirectToUpdate(patient.id)\">\r\n                <mat-icon class=\"mat-18\">system_update</mat-icon>\r\n            </button>\r\n        </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"delete\">\r\n        <th mat-header-cell *matHeaderCellDef width=\"100px\">Delete</th>\r\n        <td mat-cell *matCellDef=\"let patient\">\r\n            <button mat-icon-button color=\"warn\" (click)=\"redirectToDelete(patient.id)\">\r\n                <mat-icon class=\"mat-18\">delete</mat-icon>\r\n            </button>\r\n        </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; let even = even; columns: displayedColumns;\" [ngClass]=\"{gray: even}\"></tr>\r\n</table>\r\n\r\n<mat-paginator #paginator [pageIndex]=\"pageIndex\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\"\r\n    (page)=\"pageChange($event)\" showFirstLastButtons></mat-paginator>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patient-update/patient-update.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patient-update/patient-update.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n  <mat-card fxFlex=\"87%\" fxFlex.xs=\"100%\" style=\"border: 1;\">\r\n\r\n    <mat-card-title fxLayoutAlign=\"center center\">Update existing Patient</mat-card-title>\r\n\r\n    <form [formGroup]=\"registerForm\" autocomplete=\"off\" novalidate (ngSubmit)=\"register(registerForm.value)\">\r\n\r\n      <mat-card-content fxLayout=\"column wrap\">\r\n\r\n        <div flex fxLayoutGap=\"30px\">\r\n          <mat-label><b>Patient Name</b></mat-label><br>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"FirstName\" formControlName=\"firstName\" id=\"firstName\">\r\n            <mat-hint align=\"left\">Not more then 50 characters long.</mat-hint>\r\n            <mat-error *ngIf=\"hasError('firstName', 'required')\">Name is required</mat-error>\r\n            <mat-error *ngIf=\"hasError('firstName', 'maxlength')\">You have more than 50 characters</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"LastName\" formControlName=\"lastName\" id=\"lastName\">\r\n            <mat-hint align=\"left\">Not more then 50 characters long.</mat-hint>\r\n            <mat-error *ngIf=\"hasError('lastName', 'required')\">Last Name is required</mat-error>\r\n            <mat-error *ngIf=\"hasError('lastName', 'maxlength')\">You have more than 50 characters</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <br>\r\n        <div flex fxLayoutGap=\"30px\">\r\n          <mat-label><b>Postal Address</b></mat-label><br>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Line1\" formControlName=\"line1\" id=\"line1\">\r\n            <mat-hint align=\"left\">Not more then 150 characters long.</mat-hint>\r\n            <mat-error *ngIf=\"hasError('line1', 'required')\">Address Line 1 is required</mat-error>\r\n            <mat-error *ngIf=\"hasError('line1', 'maxlength')\">You have more than 150 characters</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Line2\" formControlName=\"line2\" id=\"line2\">\r\n            <mat-hint align=\"left\">Not more then 150 characters long.</mat-hint>\r\n            <mat-error *ngIf=\"hasError('line2', 'required')\">Address Line 2 is required</mat-error>\r\n            <mat-error *ngIf=\"hasError('line2', 'maxlength')\">You have more than 150 characters</mat-error>\r\n          </mat-form-field>\r\n          <br>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"City\" formControlName=\"city\" id=\"city\">\r\n            <mat-hint align=\"left\">Not more then 50 characters long.</mat-hint>\r\n            <mat-error *ngIf=\"hasError('city', 'required')\">City is required</mat-error>\r\n            <mat-error *ngIf=\"hasError('city', 'maxlength')\">You have more than 50 characters</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"State\" formControlName=\"state\" id=\"state\">\r\n            <mat-hint align=\"left\">Not more then 50 characters long.</mat-hint>\r\n            <mat-error *ngIf=\"hasError('state', 'required')\">State is required</mat-error>\r\n            <mat-error *ngIf=\"hasError('state', 'maxlength')\">You have more than 50 characters</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Zip\" formControlName=\"zip\" id=\"zip\">\r\n            <mat-hint align=\"left\">Not more then 6 characters long.</mat-hint>\r\n            <mat-error *ngIf=\"hasError('zip', 'required')\">Zip is required</mat-error>\r\n            <mat-error *ngIf=\"hasError('zip', 'maxlength')\">You have more than 6 characters</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <br>\r\n        <div flex fxLayoutGap=\"30px\">\r\n          <mat-label>Gender</mat-label>\r\n          <mat-radio-group formControlName=\"gender\" id=\"gender\">\r\n            <mat-radio-button *ngFor=\"let item of genders\" [checked]=\"item.checked\" [value]=\"item.value\">\r\n              {{item.option}}\r\n              &nbsp;\r\n            </mat-radio-button>\r\n          </mat-radio-group>\r\n          <br>\r\n          <mat-hint align=\"left\" class=\"mat-hint-style\">Gender is required</mat-hint>\r\n        </div>\r\n        <div>\r\n          <mat-form-field>\r\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Select Date of Birth\" formControlName=\"dateOfBirth\"\r\n              id=\"dateOfBirth\" readonly (click)=\"picker.open()\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n            <mat-hint align=\"left\">Date of Birth is required</mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n        <br>\r\n        <div flex fxLayoutGap=\"30px\">\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Email\" formControlName=\"mailId\" id=\"mailId\">\r\n            <mat-hint align=\"left\">Not more then 60 characters long.</mat-hint>\r\n            <mat-error *ngIf=\"hasError('mailId', 'required')\">Mailid is required</mat-error>\r\n            <mat-error *ngIf=\"hasError('mailId', 'maxlength')\">You have more than 60 characters</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"PhoneNo\" formControlName=\"phone\" id=\"phone\">\r\n            <mat-hint align=\"left\">Not more then 6 characters long.</mat-hint>\r\n            <mat-error *ngIf=\"hasError('phone', 'required')\">Phone Number is required</mat-error>\r\n            <mat-error *ngIf=\"hasError('phone', 'maxlength')\">You have more than 10 characters</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <br>\r\n        <div flex fxLayoutGap=\"30px\">\r\n          <mat-label>Marital Status</mat-label>\r\n          <mat-radio-group formControlName=\"maritalStatus\" id=\"maritalStatus\">\r\n            <mat-radio-button *ngFor=\"let item of marital_status\" [checked]=\"item.checked\" [value]=\"item.value\">\r\n              {{item.option}}\r\n              &nbsp;\r\n            </mat-radio-button>\r\n          </mat-radio-group>\r\n          <br>\r\n          <mat-hint align=\"left\" class=\"mat-hint-style\">Marital Status is required</mat-hint>\r\n        </div>\r\n        <br>\r\n        <div flex fxLayoutGap=\"30px\">\r\n          <mat-label>Medical History</mat-label>\r\n          <ng-container *ngFor=\"let item of disease_type; let i = index\">\r\n            <mat-checkbox [checked]=\"item.checked\" (change)=\"onChange($event)\" [value]=\"item.name\">{{item.name}}\r\n            </mat-checkbox>\r\n          </ng-container>\r\n          <br>\r\n          <mat-hint align=\"left\" class=\"mat-hint-style\">Medical History is required</mat-hint>\r\n        </div>\r\n\r\n      </mat-card-content>\r\n\r\n      <mat-card-actions style=\"text-align: center;\">\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"!registerForm.valid\">Update</button>\r\n        <!--button type=\"button\" mat-raised-button color=\"warn\" (click)=\"loginForm.reset()\">Reset</button-->\r\n        <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"onCancel()\">Cancel</button>\r\n      </mat-card-actions>\r\n\r\n    </form>\r\n\r\n  </mat-card>\r\n</section>");

/***/ }),

/***/ "./src/app/constant.ts":
/*!*****************************!*\
  !*** ./src/app/constant.ts ***!
  \*****************************/
/*! exports provided: API_URL, GENDER, MARITAL_STATUS, DISEASE_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENDER", function() { return GENDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARITAL_STATUS", function() { return MARITAL_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISEASE_TYPE", function() { return DISEASE_TYPE; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const API_URL = 'https://healthplanner-biplasar-in.osc-sbx-exp-ap-15768375-f72ef11f3ab089a8c677044eb28292cd-0001.us-east.containers.appdomain.cloud';
const GENDER = [
    { option: "Male", value: "Male", checked: false },
    { option: "Female", value: "Female", checked: false }
];
const MARITAL_STATUS = [
    { option: "Married", value: "Married", checked: false },
    { option: "Unmarried", value: "Unmarried", checked: false }
];
const DISEASE_TYPE = [
    { name: "None", checked: false },
    { name: "Allergies", checked: false },
    { name: "Anemia", checked: false },
    { name: "Anxiety", checked: false },
    { name: "Arthritis", checked: false },
    { name: "Asthma", checked: false },
    { name: "Cancer - Type", checked: false },
    { name: "COPD (Emphysema)", checked: false },
    { name: "Diabetes", checked: false },
    { name: "Liver Disease", checked: false },
    { name: "Osteoarthritis", checked: false },
    { name: "Osteoporosis", checked: false },
    { name: "Thyroid Disease", checked: false }
];


/***/ }),

/***/ "./src/app/model/patient.ts":
/*!**********************************!*\
  !*** ./src/app/model/patient.ts ***!
  \**********************************/
/*! exports provided: Patient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patient", function() { return Patient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Patient {
}


/***/ }),

/***/ "./src/app/model/patient_name.ts":
/*!***************************************!*\
  !*** ./src/app/model/patient_name.ts ***!
  \***************************************/
/*! exports provided: PatientName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientName", function() { return PatientName; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PatientName {
}


/***/ }),

/***/ "./src/app/model/postal_address.ts":
/*!*****************************************!*\
  !*** ./src/app/model/postal_address.ts ***!
  \*****************************************/
/*! exports provided: PostalAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostalAddress", function() { return PostalAddress; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PostalAddress {
}


/***/ }),

/***/ "./src/app/patients/patient-create/patient-create.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/patients/patient-create/patient-create.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\r\n  width: 350px;\r\n}\r\n\r\nmat-card-title {\r\n  text-align: center;\r\n}\r\n\r\n.mat-hint-style {\r\n  font-size: 75%;\r\n  font-weight: 400;\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n  color: rgba(0, 0, 0, 0.54);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudHMvcGF0aWVudC1jcmVhdGUvcGF0aWVudC1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaURBQWlEO0VBQ2pELDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnRzL3BhdGllbnQtY3JlYXRlL3BhdGllbnQtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZC10aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LWhpbnQtc3R5bGUge1xyXG4gIGZvbnQtc2l6ZTogNzUlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/patients/patient-create/patient-create.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/patients/patient-create/patient-create.component.ts ***!
  \*********************************************************************/
/*! exports provided: PatientCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientCreateComponent", function() { return PatientCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var src_app_model_patient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/patient */ "./src/app/model/patient.ts");
/* harmony import */ var src_app_model_patient_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/patient_name */ "./src/app/model/patient_name.ts");
/* harmony import */ var src_app_model_postal_address__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/model/postal_address */ "./src/app/model/postal_address.ts");
/* harmony import */ var src_app_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/constant */ "./src/app/constant.ts");
/* harmony import */ var src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/message-box */ "./src/app/shared/message-box.ts");










let PatientCreateComponent = class PatientCreateComponent {
    constructor(dialog, service) {
        this.dialog = dialog;
        this.service = service;
        this.genders = src_app_constant__WEBPACK_IMPORTED_MODULE_8__["GENDER"];
        this.marital_status = src_app_constant__WEBPACK_IMPORTED_MODULE_8__["MARITAL_STATUS"];
        this.disease_type = src_app_constant__WEBPACK_IMPORTED_MODULE_8__["DISEASE_TYPE"];
    }
    ngOnInit() {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
            line1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(150)]),
            line2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(150)]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
            zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6)]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            dateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            mailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
            maritalStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    hasError(controlName, errorName) {
        return this.registerForm.controls[controlName].hasError(errorName);
    }
    onCancel() {
        //this.location.back();
    }
    register(registerFormValue) {
        if (this.registerForm.valid) {
            var patient = new src_app_model_patient__WEBPACK_IMPORTED_MODULE_5__["Patient"];
            var patientName = new src_app_model_patient_name__WEBPACK_IMPORTED_MODULE_6__["PatientName"];
            patientName.firstName = registerFormValue.firstName;
            patientName.lastName = registerFormValue.lastName;
            patient.patientName = patientName;
            var postalAddress = new src_app_model_postal_address__WEBPACK_IMPORTED_MODULE_7__["PostalAddress"];
            postalAddress.line1 = registerFormValue.line1;
            postalAddress.line2 = registerFormValue.line2;
            postalAddress.city = registerFormValue.city;
            postalAddress.state = registerFormValue.state;
            postalAddress.zip = registerFormValue.zip;
            patient.postalAddress = postalAddress;
            patient.gender = registerFormValue.gender;
            patient.dateOfBirth = registerFormValue.dateOfBirth;
            patient.mailId = registerFormValue.mailId;
            patient.phone = registerFormValue.phone;
            patient.maritalStatus = registerFormValue.maritalStatus;
            patient.medHistory = [];
            for (var i = 0; i < this.disease_type.length; i++) {
                if (this.disease_type[i].checked)
                    patient.medHistory.push(this.disease_type[i].name);
            }
            this.service.saveData(patient).subscribe(response => {
                src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_9__["MessageBox"].show(this.dialog, "Alert", 'Successfully added the reord', src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_9__["MessageBoxButton"].Ok, "350px");
                this.registerForm.reset();
            }, error => {
                let errorMsg = '';
                if (typeof error.error.message !== 'undefined')
                    errorMsg = error.error.message;
                else if (typeof error.error !== 'undefined')
                    errorMsg = error.error;
                else
                    errorMsg = error.message;
                src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_9__["MessageBox"].show(this.dialog, "Error", errorMsg, src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_9__["MessageBoxButton"].Ok, "350px");
            });
        }
        else
            src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_9__["MessageBox"].show(this.dialog, "Error", 'Some Input data are invalid', src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_9__["MessageBoxButton"].Ok, "350px");
    }
    onChange(event) {
        for (var i = 0; i < this.disease_type.length; i++) {
            if (this.disease_type[i].name == event.source.value) {
                if (event.checked)
                    this.disease_type[i].checked = true;
                else
                    this.disease_type[i].checked = false;
                break;
            }
        }
    }
};
PatientCreateComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_4__["PatientService"] }
];
PatientCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patient-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./patient-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patient-create/patient-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./patient-create.component.css */ "./src/app/patients/patient-create/patient-create.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_4__["PatientService"]])
], PatientCreateComponent);



/***/ }),

/***/ "./src/app/patients/patient-details/patient-details.component.css":
/*!************************************************************************!*\
  !*** ./src/app/patients/patient-details/patient-details.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\r\n  width: 350px;\r\n}\r\n\r\nmat-card-title {\r\n  text-align: center;\r\n}\r\n\r\n.mat-hint-style {\r\n  font-size: 75%;\r\n  font-weight: 400;\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n  color: rgba(0, 0, 0, 0.54);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudHMvcGF0aWVudC1kZXRhaWxzL3BhdGllbnQtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpREFBaUQ7RUFDakQsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvcGF0aWVudHMvcGF0aWVudC1kZXRhaWxzL3BhdGllbnQtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAzNTBweDtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1oaW50LXN0eWxlIHtcclxuICBmb250LXNpemU6IDc1JTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/patients/patient-details/patient-details.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/patients/patient-details/patient-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: PatientDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientDetailsComponent", function() { return PatientDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var src_app_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/constant */ "./src/app/constant.ts");
/* harmony import */ var src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/message-box */ "./src/app/shared/message-box.ts");









let PatientDetailsComponent = class PatientDetailsComponent {
    constructor(activeRoute, service, dialog, location) {
        this.activeRoute = activeRoute;
        this.service = service;
        this.dialog = dialog;
        this.location = location;
        this.genders = src_app_constant__WEBPACK_IMPORTED_MODULE_7__["GENDER"];
        this.marital_status = src_app_constant__WEBPACK_IMPORTED_MODULE_7__["MARITAL_STATUS"];
        this.disease_type = src_app_constant__WEBPACK_IMPORTED_MODULE_7__["DISEASE_TYPE"];
    }
    ngOnInit() {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            line1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            line2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            dateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            mailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            maritalStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.registerForm.disable();
        let id = this.activeRoute.snapshot.params['id'];
        this.service.getDataById(id).subscribe(response => {
            this.patient = response;
            this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.patient.patientName.firstName),
                lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.patient.patientName.lastName),
                line1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.patient.postalAddress.line1),
                line2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.patient.postalAddress.line2),
                city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.patient.postalAddress.city),
                state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.patient.postalAddress.state),
                zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.patient.postalAddress.zip),
                gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.patient.gender),
                dateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.patient.dateOfBirth),
                mailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.patient.mailId),
                phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.patient.phone),
                maritalStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.patient.maritalStatus)
            });
            this.registerForm.disable();
            for (var i = 0; i < this.disease_type.length; i++) {
                if (this.patient.medHistory.indexOf(this.disease_type[i].name) != -1) {
                    this.disease_type[i].checked = true;
                }
            }
        }, error => {
            let errorMsg = '';
            if (typeof error.error.message !== 'undefined')
                errorMsg = error.error.message;
            else if (typeof error.error !== 'undefined')
                errorMsg = error.error;
            else
                errorMsg = error.message;
            src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_8__["MessageBox"].show(this.dialog, "Error", errorMsg, src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_8__["MessageBoxButton"].Ok, "350px");
        });
    }
    onCancel() {
        this.location.back();
    }
};
PatientDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_6__["PatientService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
PatientDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patient-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./patient-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patient-details/patient-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./patient-details.component.css */ "./src/app/patients/patient-details/patient-details.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_6__["PatientService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
], PatientDetailsComponent);



/***/ }),

/***/ "./src/app/patients/patient-list/patient-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/patients/patient-list/patient-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: PatientListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientListComponent", function() { return PatientListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/message-box */ "./src/app/shared/message-box.ts");






let PatientListComponent = class PatientListComponent {
    constructor(service, router, dialog) {
        this.service = service;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['patientName', 'postalAddress', 'gender', 'dateOfBirth', 'mailId', 'phone', 'maritalStatus', 'medicalHistory',
            'details', 'update', 'delete'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.pageIndex = 0;
        this.totalLength = 0;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.redirectToDetails = (id) => {
            let url = `/patient/details/${id}`;
            this.router.navigate([url]);
        };
        this.redirectToUpdate = (id) => {
            let url = `/patient/update/${id}`;
            this.router.navigate([url]);
        };
        this.redirectToDelete = (id) => {
            src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_5__["MessageBox"].show(this.dialog, "Confirm Action", 'Do you want to delete the record ?', src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_5__["MessageBoxButton"].YesNo, "350px")
                .subscribe(result => {
                const dialogResult = (result === undefined) ? "none" : result.result;
                if (dialogResult == "yes") {
                    this.service.deleteData(id).subscribe(response => {
                        src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_5__["MessageBox"].show(this.dialog, "Alert", 'Successfully deleted the reord ' + id, src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_5__["MessageBoxButton"].Ok, "350px")
                            .subscribe(result => {
                            this.getPatientList();
                        });
                    }, error => {
                        let errorMsg = '';
                        if (typeof error.error.message !== 'undefined')
                            errorMsg = error.error.message;
                        else if (typeof error.error !== 'undefined')
                            errorMsg = error.error;
                        else
                            errorMsg = error.message;
                        src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_5__["MessageBox"].show(this.dialog, "Error", errorMsg, src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_5__["MessageBoxButton"].Ok, "350px");
                    });
                }
            });
        };
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.filterPredicate = (data, filter) => {
            const accumulator = (currentTerm, key) => {
                return this.nestedFilterCheck(currentTerm, data, key);
            };
            const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
            const transformedFilter = filter.trim().toLowerCase();
            return dataStr.indexOf(transformedFilter) !== -1;
        };
        this.getPatientList();
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    pageChange(event) {
        /*this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize
        this.createTable();*/
    }
    getPatientList() {
        this.service.getData().subscribe(response => {
            this.dataSource.data = response.patients;
        }, error => {
            let errorMsg = '';
            if (typeof error.error.message !== 'undefined')
                errorMsg = error.error.message;
            else if (typeof error.error !== 'undefined')
                errorMsg = error.error;
            else
                errorMsg = error.message;
            src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_5__["MessageBox"].show(this.dialog, "Error", errorMsg, src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_5__["MessageBoxButton"].Ok, "350px");
        });
    }
    nestedFilterCheck(search, data, key) {
        if (typeof data[key] === 'object') {
            for (const k in data[key]) {
                if (data[key][k] !== null) {
                    search = this.nestedFilterCheck(search, data[key], k);
                }
            }
        }
        else {
            search += data[key];
        }
        return search;
    }
};
PatientListComponent.ctorParameters = () => [
    { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
], PatientListComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], PatientListComponent.prototype, "paginator", void 0);
PatientListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patient-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./patient-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patient-list/patient-list.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
], PatientListComponent);



/***/ }),

/***/ "./src/app/patients/patient-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/patients/patient-routing.module.ts ***!
  \****************************************************/
/*! exports provided: PatientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientRoutingModule", function() { return PatientRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _patients_patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../patients/patient-list/patient-list.component */ "./src/app/patients/patient-list/patient-list.component.ts");
/* harmony import */ var _patients_patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../patients/patient-details/patient-details.component */ "./src/app/patients/patient-details/patient-details.component.ts");
/* harmony import */ var _patients_patient_create_patient_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../patients/patient-create/patient-create.component */ "./src/app/patients/patient-create/patient-create.component.ts");
/* harmony import */ var _patients_patient_update_patient_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../patients/patient-update/patient-update.component */ "./src/app/patients/patient-update/patient-update.component.ts");








//import { PatientDeleteComponent } from '../patients/patient-delete/owner-delete.component';
const patientRoutes = [
    { path: 'patients', component: _patients_patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_4__["PatientListComponent"] },
    { path: 'details/:id', component: _patients_patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_5__["PatientDetailsComponent"] },
    { path: 'create', component: _patients_patient_create_patient_create_component__WEBPACK_IMPORTED_MODULE_6__["PatientCreateComponent"] },
    { path: 'update/:id', component: _patients_patient_update_patient_update_component__WEBPACK_IMPORTED_MODULE_7__["PatientUpdateComponent"] },
];
let PatientRoutingModule = class PatientRoutingModule {
};
PatientRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(patientRoutes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ],
        declarations: []
    })
], PatientRoutingModule);



/***/ }),

/***/ "./src/app/patients/patient-update/patient-update.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/patients/patient-update/patient-update.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\r\n  width: 350px;\r\n}\r\n\r\nmat-card-title {\r\n  text-align: center;\r\n}\r\n\r\n.mat-hint-style {\r\n  font-size: 75%;\r\n  font-weight: 400;\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n  color: rgba(0, 0, 0, 0.54);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudHMvcGF0aWVudC11cGRhdGUvcGF0aWVudC11cGRhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaURBQWlEO0VBQ2pELDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnRzL3BhdGllbnQtdXBkYXRlL3BhdGllbnQtdXBkYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZC10aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LWhpbnQtc3R5bGUge1xyXG4gIGZvbnQtc2l6ZTogNzUlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/patients/patient-update/patient-update.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/patients/patient-update/patient-update.component.ts ***!
  \*********************************************************************/
/*! exports provided: PatientUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientUpdateComponent", function() { return PatientUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var src_app_model_patient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/model/patient */ "./src/app/model/patient.ts");
/* harmony import */ var src_app_model_patient_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/model/patient_name */ "./src/app/model/patient_name.ts");
/* harmony import */ var src_app_model_postal_address__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/model/postal_address */ "./src/app/model/postal_address.ts");
/* harmony import */ var src_app_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/constant */ "./src/app/constant.ts");
/* harmony import */ var src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/message-box */ "./src/app/shared/message-box.ts");












let PatientUpdateComponent = class PatientUpdateComponent {
    constructor(activeRoute, dialog, service, location) {
        this.activeRoute = activeRoute;
        this.dialog = dialog;
        this.service = service;
        this.location = location;
        this.genders = src_app_constant__WEBPACK_IMPORTED_MODULE_10__["GENDER"];
        this.marital_status = src_app_constant__WEBPACK_IMPORTED_MODULE_10__["MARITAL_STATUS"];
        this.disease_type = src_app_constant__WEBPACK_IMPORTED_MODULE_10__["DISEASE_TYPE"];
    }
    ngOnInit() {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            line1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            line2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            dateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            mailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            maritalStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        let id = this.activeRoute.snapshot.params['id'];
        this.patientId = id;
        this.service.getDataById(id).subscribe(response => {
            this.patient = response;
            this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.patient.patientName.firstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
                lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.patient.patientName.lastName, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
                line1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.patient.postalAddress.line1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(150)]),
                line2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.patient.postalAddress.line2, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(150)]),
                city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.patient.postalAddress.city, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
                state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.patient.postalAddress.state, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
                zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.patient.postalAddress.zip, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6)]),
                gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.patient.gender, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                dateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.patient.dateOfBirth, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                mailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.patient.mailId, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
                phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.patient.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
                maritalStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.patient.maritalStatus, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            });
            for (var i = 0; i < this.disease_type.length; i++) {
                if (this.patient.medHistory.indexOf(this.disease_type[i].name) != -1) {
                    this.disease_type[i].checked = true;
                }
            }
        }, error => {
            this.registerForm.disable();
            let errorMsg = '';
            if (typeof error.error.message !== 'undefined')
                errorMsg = error.error.message;
            else if (typeof error.error !== 'undefined')
                errorMsg = error.error;
            else
                errorMsg = error.message;
            src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_11__["MessageBox"].show(this.dialog, "Error", errorMsg, src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_11__["MessageBoxButton"].Ok, "350px");
        });
    }
    hasError(controlName, errorName) {
        return this.registerForm.controls[controlName].hasError(errorName);
    }
    register(registerFormValue) {
        if (this.registerForm.valid) {
            var patient = new src_app_model_patient__WEBPACK_IMPORTED_MODULE_7__["Patient"];
            patient.id = this.patientId;
            var patientName = new src_app_model_patient_name__WEBPACK_IMPORTED_MODULE_8__["PatientName"];
            patientName.firstName = registerFormValue.firstName;
            patientName.lastName = registerFormValue.lastName;
            patient.patientName = patientName;
            var postalAddress = new src_app_model_postal_address__WEBPACK_IMPORTED_MODULE_9__["PostalAddress"];
            postalAddress.line1 = registerFormValue.line1;
            postalAddress.line2 = registerFormValue.line2;
            postalAddress.city = registerFormValue.city;
            postalAddress.state = registerFormValue.state;
            postalAddress.zip = registerFormValue.zip;
            patient.postalAddress = postalAddress;
            patient.gender = registerFormValue.gender;
            patient.dateOfBirth = registerFormValue.dateOfBirth;
            patient.mailId = registerFormValue.mailId;
            patient.phone = registerFormValue.phone;
            patient.maritalStatus = registerFormValue.maritalStatus;
            patient.medHistory = [];
            for (var i = 0; i < this.disease_type.length; i++) {
                if (this.disease_type[i].checked)
                    patient.medHistory.push(this.disease_type[i].name);
            }
            this.service.updateData(this.patientId, patient).subscribe(response => {
                src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_11__["MessageBox"].show(this.dialog, "Alert", 'Successfully updated the reord ' + this.patientId, src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_11__["MessageBoxButton"].Ok, "350px");
            }, error => {
                let errorMsg = '';
                if (typeof error.error.message !== 'undefined')
                    errorMsg = error.error.message;
                else if (typeof error.error !== 'undefined')
                    errorMsg = error.error;
                else
                    errorMsg = error.message;
                src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_11__["MessageBox"].show(this.dialog, "Error", errorMsg, src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_11__["MessageBoxButton"].Ok, "350px");
            });
        }
        else
            src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_11__["MessageBox"].show(this.dialog, "Error", 'Some Input data are invalid', src_app_shared_message_box__WEBPACK_IMPORTED_MODULE_11__["MessageBoxButton"].Ok, "350px");
    }
    onChange(event) {
        for (var i = 0; i < this.disease_type.length; i++) {
            if (this.disease_type[i].name == event.source.value) {
                if (event.checked)
                    this.disease_type[i].checked = true;
                else
                    this.disease_type[i].checked = false;
                break;
            }
        }
    }
    onCancel() {
        this.location.back();
    }
};
PatientUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_6__["PatientService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
PatientUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patient-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./patient-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patient-update/patient-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./patient-update.component.css */ "./src/app/patients/patient-update/patient-update.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_6__["PatientService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
], PatientUpdateComponent);



/***/ }),

/***/ "./src/app/patients/patient.module.ts":
/*!********************************************!*\
  !*** ./src/app/patients/patient.module.ts ***!
  \********************************************/
/*! exports provided: PatientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientModule", function() { return PatientModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patient-list/patient-list.component */ "./src/app/patients/patient-list/patient-list.component.ts");
/* harmony import */ var _patient_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patient-routing.module */ "./src/app/patients/patient-routing.module.ts");
/* harmony import */ var _patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patient-details/patient-details.component */ "./src/app/patients/patient-details/patient-details.component.ts");
/* harmony import */ var _patient_create_patient_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patient-create/patient-create.component */ "./src/app/patients/patient-create/patient-create.component.ts");
/* harmony import */ var _patient_update_patient_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./patient-update/patient-update.component */ "./src/app/patients/patient-update/patient-update.component.ts");










//import { PatientDeleteComponent } from './patient-delete/patient-delete.component';
let PatientModule = class PatientModule {
};
PatientModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _patient_routing_module__WEBPACK_IMPORTED_MODULE_6__["PatientRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ],
        declarations: [
            _patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_5__["PatientListComponent"],
            _patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_7__["PatientDetailsComponent"],
            _patient_create_patient_create_component__WEBPACK_IMPORTED_MODULE_8__["PatientCreateComponent"],
            _patient_update_patient_update_component__WEBPACK_IMPORTED_MODULE_9__["PatientUpdateComponent"],
        ]
    })
], PatientModule);



/***/ }),

/***/ "./src/app/services/patient.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/patient.service.ts ***!
  \*********************************************/
/*! exports provided: PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return PatientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant */ "./src/app/constant.ts");




let PatientService = class PatientService {
    constructor(http) {
        this.http = http;
        //url = 'http://localhost:4000';
        this.baseURL = 'http://localhost:8080';
    }
    getData() {
        //return this.http.get(`${this.url}/patients`);
        return this.http.get(`${_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"]}/user/get`);
    }
    getDataById(id) {
        return this.http.get(`${_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"]}/user/get/${id}`);
    }
    saveData(patient) {
        return this.http.post(`${_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"]}/user/create`, patient);
    }
    updateData(id, patient) {
        return this.http.put(`${_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"]}/user/update/${id}`, patient);
    }
    deleteData(id) {
        return this.http.delete(`${_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"]}/user/delete/${id}`);
    }
};
PatientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PatientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], PatientService);



/***/ })

}]);
//# sourceMappingURL=patients-patient-module-es2015.js.map