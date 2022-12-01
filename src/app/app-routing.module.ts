import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { PatientTableComponent } from './patient-table/patient-table.component';
import { BrowserModule } from '@angular/platform-browser';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { FollowupTableComponent } from './followup-table/followup-table.component';
import { WorkerDetailsComponent } from './worker-details/worker-details.component';
import { PatientFollowupTableComponent } from './patient-followup-table/patient-followup-table.component';
import { EnterFollowupComponent } from './enter-followup/enter-followup.component';
import { DischargeSummaryComponent } from './discharge-summary/discharge-summary.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssignAshaTableComponent } from './assign-asha-table/assign-asha-table.component';
import { RecordVisitComponent } from './record-visit/record-visit.component';
import { DischargedPatientsComponent } from './discharged-patients/discharged-patients.component';
import { TrackChildComponent } from './track-child/track-child.component';
import { TrackChildDetailsComponent } from './track-child-details/track-child-details.component';
import { AshaPatientComponent } from './asha-patient/asha-patient.component';
import { AshaPatientFollowupComponent } from './asha-patient-followup/asha-patient-followup.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginAshaComponent } from './login-asha/login-asha.component';
import { LoginAnmComponent } from './login-anm/login-anm.component';
import { AshaAddFollowupComponent } from './asha-add-followup/asha-add-followup.component';
import { SortTableComponent } from './sort-table/sort-table.component';
// import { AgGridComponent } from './ag-grid/ag-grid.component';
//import { AgGridComponent } from './ag-grid/ag-grid.component';
//import { AdminComponent } from './admin/admin.component';
//import { LoginNrcComponent } from './login-nrc/login-nrc.component';
import { LoginNrcComponent } from './login-nrc/login-nrc.component';
import { TrackChildNrcComponent } from './track-child-nrc/track-child-nrc.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { PatientFollowupTableNrcComponent } from './patient-followup-table-nrc/patient-followup-table-nrc.component';
import { FollowupTableNrcComponent } from './followup-table-nrc/followup-table-nrc.component';
import { AdminComponent } from './admin/admin.component';
import { NrcDashboardComponent } from './nrc-dashboard/nrc-dashboard.component';
import { AdminAshaComponent } from './admin-asha/admin-asha.component';
import { AdminPhcComponent } from './admin-phc/admin-phc.component';
import { AdminPhcDoctorComponent } from './admin-phc-doctor/admin-phc-doctor.component';
import { AdminNrcDoctorComponent } from './admin-nrc-doctor/admin-nrc-doctor.component';
import { AdminAnmComponent } from './admin-anm/admin-anm.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'nrc-home', component: NrcDashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login-doctor', component: LoginFormComponent },
  { path: 'login-nrc', component: LoginNrcComponent },
  { path: 'login-asha', component: LoginAshaComponent },
  { path: 'login-anm', component: LoginAnmComponent },
  { path: 'login-admin', component: LoginAdminComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'assign-asha', component: AssignAshaTableComponent },
//   { path: 'sort', component: AgGridComponent },
  { path: 'discharged-patients', component: DischargedPatientsComponent },
  { path: 'followup-list', component: FollowupTableComponent },
  { path: 'nrc-followup-list', component: FollowupTableNrcComponent },
  { path: 'asha-worker/:awId', component: WorkerDetailsComponent },
  { path: 'followup/:samId', component: PatientFollowupTableComponent },
  { path: 'nrc-followup/:samId', component: PatientFollowupTableNrcComponent },
  { path: 'add-followup/:caseId', component: EnterFollowupComponent },
  { path: 'nrc-add-followup/:caseId', component: EnterFollowupComponent },
  { path: 'record-visit/:caseId', component: RecordVisitComponent },
  { path: 'nrc-record-visit/:caseId', component: RecordVisitComponent },
  { path: 'track-child', component: TrackChildComponent },
  { path: 'nrc-track-child', component: TrackChildNrcComponent },
  { path: 'track-child/:rchId', component: TrackChildDetailsComponent },
  { path: 'nrc-track-child/:rchId', component: TrackChildDetailsComponent },
  { path: 'asha-followups', component: AshaPatientComponent },
  { path: 'asha-add-followup/:scheduleId', component: AshaAddFollowupComponent },
  { path: 'asha-patient-followup/:caseId', component: AshaPatientFollowupComponent },
  { path: 'admin-nrc', component: AdminComponent },
  { path: 'admin-phc', component: AdminPhcComponent },
  { path: 'admin-phc-doctor', component: AdminPhcDoctorComponent },
  { path: 'admin-nrc-doctor', component: AdminNrcDoctorComponent },
  { path: 'admin-asha', component: AdminAshaComponent },
  { path: 'admin-anm', component: AdminAnmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }