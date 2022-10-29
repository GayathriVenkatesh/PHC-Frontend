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
import { RecordVisitComponent } from './record-visit/record-visit.component';
import { DischargedPatientsComponent } from './discharged-patients/discharged-patients.component';
import { RejectModalComponent } from './reject-modal/reject-modal.component';
import { AshaModalComponent } from './asha-modal/asha-modal.component';
import { SuccessfulAssignmentComponent } from './successful-assignment/successful-assignment.component';
import { WorkerDetailModalComponent } from './worker-detail-modal/worker-detail-modal.component';
import { TrackChildComponent } from './track-child/track-child.component';
import { TrackChildDetailsComponent } from './track-child-details/track-child-details.component';
import { ApproveModalComponent } from './approve-modal/approve-modal.component';
import { CancelModalComponent } from './cancel-modal/cancel-modal.component';
import { CommonModule } from '@angular/common';
import { AshaPatientComponent } from './asha-patient/asha-patient.component';
import { AshaPatientFollowupComponent } from './asha-patient-followup/asha-patient-followup.component';
import { NotificationComponent } from './notification/notification.component';
import { AssignAshaTableComponent } from './assign-asha-table/assign-asha-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientFollowupTableComponent } from './patient-followup-table/patient-followup-table.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
// import { MatRippleModule } from '@angular/material/ri';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatNativeDateModule } from '@angular/material/native-date';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { EnterFollowupComponent } from './enter-followup/enter-followup.component';

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
    SmallModalComponent,
    RecordVisitComponent,
    DischargedPatientsComponent,
    RejectModalComponent,
    AshaModalComponent,
    SuccessfulAssignmentComponent,
    WorkerDetailModalComponent,
    TrackChildComponent,
    TrackChildDetailsComponent,
    ApproveModalComponent,
    CancelModalComponent,
    AshaPatientComponent,
    AshaPatientFollowupComponent,
    NotificationComponent,
    AssignAshaTableComponent,
    PatientFollowupTableComponent,
    EnterFollowupComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MdbModalModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    // FontAwesomeModule
  ],
  providers: [UserService, PatientService, FollowupService, FileUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }