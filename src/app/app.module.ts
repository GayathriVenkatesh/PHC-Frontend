import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './service/user.service';
import { PatientService } from './service/patient.service';
import { PatientTableComponent } from './patient-table/patient-table.component';
import { FollowupService } from './service/followup.service';
import { FollowupTableComponent } from './followup-table/followup-table.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { SearchComponent } from './search/search.component';
import { DischargeSummaryComponent } from './discharge-summary/discharge-summary.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssignAshaComponent } from './assign-asha/assign-asha.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileUploadService } from './service/file-upload.service';
import { ModalComponent } from './modal/modal.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { SmallModalComponent } from './small-modal/small-modal.component';

// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PatientTableComponent,
    FollowupTableComponent,
    SidePanelComponent,
    SearchComponent,
    DischargeSummaryComponent,
    TopBarComponent,
    DashboardComponent,
    AssignAshaComponent,
    FileUploadComponent,
    ModalComponent,
    SmallModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MdbModalModule
    // FontAwesomeModule
  ],
  providers: [UserService, PatientService, FollowupService, FileUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }