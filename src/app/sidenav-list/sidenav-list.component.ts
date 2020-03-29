import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { MatDialog } from '@angular/material';
import { MessageBox, MessageBoxButton } from '../shared/message-box';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor(
    private router: Router,
    private _sharedService: SharedService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  public logout() {
    MessageBox.show(this.dialog, "Confirm Action", 'Do you want to logout ?', MessageBoxButton.YesNo, "350px")
      .subscribe(result => {
        const dialogResult = (result === undefined) ? "none" : result.result;
        if (dialogResult == "yes") {
          localStorage.removeItem("logedUser");
          this._sharedService.emitChange(null);
          this.router.navigate(['']);
        }
      });
  }

}
