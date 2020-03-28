import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { UserComponent } from './user/user.component';
import { DialogComponent } from './dialogs/dialog.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component'

import { TableService } from './table/table.service';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HomeComponent,
    CreateComponent,
    HeaderComponent,
    LayoutComponent,
    LoginComponent,
    ErrorComponent,
    UserComponent,
    SidenavListComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SmartTableModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [
    TableService,
    SharedService,
  ],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
