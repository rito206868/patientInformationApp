import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router'
import { User } from '../../model/user';
import { SharedService } from '../../services/shared.service';
import { MessageBox, MessageBoxButton } from 'src/app/shared/message-box';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  logedUser: User = null;
  @Output() updateView = new EventEmitter();

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private _sharedService: SharedService,
  ) {
    localStorage.removeItem('logedUser');
    this._sharedService.emitChange(null);
  }

  ngOnInit() {

    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

  }

  public hasError(controlName: string, errorName: string) {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  public onCancel() {
    //this.location.back();
  }

  public login(loginFormValue) {
    if (this.loginForm.valid) {
      if (loginFormValue.username === "admin" && loginFormValue.password === "admin") {
        MessageBox.show(this.dialog, "Alert", 'Login Successfully', MessageBoxButton.Ok, "350px")
          .subscribe(result => {
            this.logedUser = new User();
            this.logedUser.username = loginFormValue.username;
            this.logedUser.password = loginFormValue.password;
            localStorage.setItem('logedUser', JSON.stringify(this.logedUser));
            this._sharedService.emitChange(this.logedUser);
            this.router.navigate(['/home']);
          });
      }
      else
        MessageBox.show(this.dialog, "Error", 'Invalid User Name or Password', MessageBoxButton.Ok, "350px");
    }
  }

}
