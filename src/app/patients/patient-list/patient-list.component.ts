import { Component, OnInit, ViewChild } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../model/patient';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { MessageBoxButton, MessageBox } from 'src/app/shared/message-box';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styles: []
})
export class PatientListComponent implements OnInit {

  constructor(
    private service: PatientService,
    private router: Router,
    private dialog: MatDialog) {
  }

  public dialogConfig;
  public displayedColumns = ['patientName', 'postalAddress', 'gender', 'dateOfBirth', 'mailId', 'phone', 'maritalStatus', 'medicalHistory',
    'details', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Patient>();

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  pageIndex = 0;
  totalLength: number = 0;
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (data, filter: string) => {
      const accumulator = (currentTerm, key) => {
        return this.nestedFilterCheck(currentTerm, data, key);
      };
      const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) !== -1;
    }

    this.getPatientList();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  pageChange(event: any) {
    /*this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize
    this.createTable();*/
  }

  public getPatientList() {

    this.service.getData().subscribe(
      response => {
        this.dataSource.data = response.patients;
      },
      error => {
        let errorMsg = '';
        if (typeof error.error.message !== 'undefined')
          errorMsg = error.error.message;
        else if (typeof error.error !== 'undefined')
          errorMsg = error.error;
        else
          errorMsg = error.message;
        MessageBox.show(this.dialog, "Error", errorMsg, MessageBoxButton.Ok, "350px");
      }
    );
  }

  public redirectToDetails = (id: string) => {
    let url: string = `/patient/details/${id}`;
    this.router.navigate([url]);
  }

  public redirectToUpdate = (id: string) => {
    let url: string = `/patient/update/${id}`;
    this.router.navigate([url]);
  }

  public redirectToDelete = (id: string) => {
    MessageBox.show(this.dialog, "Confirm Action", 'Do you want to delete the record ?', MessageBoxButton.YesNo, "350px")
      .subscribe(result => {
        const dialogResult = (result === undefined) ? "none" : result.result;
        if (dialogResult == "yes") {
          this.service.deleteData(id).subscribe(
            response => {
              MessageBox.show(this.dialog, "Alert", 'Successfully deleted the reord ' + id, MessageBoxButton.Ok, "350px")
                .subscribe(result => {
                  this.getPatientList();
                });
            },
            error => {
              let errorMsg = '';
              if (typeof error.error.message !== 'undefined')
                errorMsg = error.error.message;
              else if (typeof error.error !== 'undefined')
                errorMsg = error.error;
              else
                errorMsg = error.message;
              MessageBox.show(this.dialog, "Error", errorMsg, MessageBoxButton.Ok, "350px");
            }
          );
        }
      });

  }

  nestedFilterCheck(search, data, key) {
    if (typeof data[key] === 'object') {
      for (const k in data[key]) {
        if (data[key][k] !== null) {
          search = this.nestedFilterCheck(search, data[key], k);
        }
      }
    } else {
      search += data[key];
    }
    return search;
  }

}