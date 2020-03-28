import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../login/user';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  logedUser: User = null;
  @Output() sidenavClose = new EventEmitter();

  constructor(private _sharedService: SharedService
    ) {
      _sharedService.changeEmitted$.subscribe(
        user => {
          this.logedUser = user;
        });
    }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
