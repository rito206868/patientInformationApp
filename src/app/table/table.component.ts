import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { TableService } from './table.service';
import { Table } from './Table';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { SharedService } from '../shared.service';
import { User } from '../login/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: []
})
export class TableComponent implements OnInit, AfterViewInit {

  logedUser: User = null;
  public displayedColumns = ['id', 'patientName', 'postalAddress', 'dateOfBirth', 'mailId', 'phone', 'maritalStatus', 'medicalHistory', 
   'details','update', 'delete'];
  public dataSource = new MatTableDataSource<Table>();

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  pageIndex = 0;
  totalLength: number = 0;
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  constructor(private tservice: TableService,private _sharedService: SharedService) { 
    _sharedService.changeEmitted$.subscribe(
      user => {
        this.logedUser = user;
      });
  }

  ngOnInit() {
    this.tservice.getData().subscribe(
      (data: any) => {
        //console.log(JSON.stringify(data.patients));
         // this.patients = data.patients;
        this.dataSource.data = data.patients;
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    if (value.length < 3)
      return;
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public redirectToDetails = (id: string) => {
    let url: string = `/owner/details/${id}`;
    //this.router.navigate([url]);
  }

  public redirectToUpdate = (id: string) => {
    let url: string = `/owner/update/${id}`;
    //this.router.navigate([url]);
  }

  public redirectToDelete = (id: string) => {
    let url: string = `/owner/delete/${id}`;
    //this.router.navigate([url]);
  }

}