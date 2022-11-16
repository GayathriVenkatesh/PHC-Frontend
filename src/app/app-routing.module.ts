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

const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login-doctor', component: LoginFormComponent },
  { path: 'login-asha', component: LoginAshaComponent },
  { path: 'login-anm', component: LoginAnmComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'assign-asha', component: AssignAshaTableComponent },
//   { path: 'sort', component: AgGridComponent },
  { path: 'discharged-patients', component: DischargedPatientsComponent },
  { path: 'followup-list', component: FollowupTableComponent },
  { path: 'asha-worker/:awId', component: WorkerDetailsComponent },
  { path: 'followup/:samId', component: PatientFollowupTableComponent },
  { path: 'add-followup/:caseId', component: EnterFollowupComponent },
  { path: 'record-visit/:caseId', component: RecordVisitComponent },
  { path: 'track-child', component: TrackChildComponent },
  { path: 'track-child/:rchId', component: TrackChildDetailsComponent },
  { path: 'asha-followups', component: AshaPatientComponent },
  { path: 'asha-add-followup/:scheduleId', component: AshaAddFollowupComponent },
  { path: 'asha-patient-followup/:caseId', component: AshaPatientFollowupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }