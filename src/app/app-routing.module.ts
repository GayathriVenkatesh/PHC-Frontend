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
import { AssignAshaComponent } from './assign-asha/assign-asha.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: '', redirectTo: 'patients', pathMatch: 'full' },
  { path: 'patients', component: PatientTableComponent },
  { path: 'assign-asha', component: AssignAshaComponent },
  { path: 'patient/:rchId', component: PatientDetailsComponent },
  { path: 'discharge-summary', component: DischargeSummaryComponent },
  { path: 'followup-list', component: FollowupTableComponent },
  { path: 'asha-worker/:awId', component: WorkerDetailsComponent },
  { path: 'followup/:samId', component: PatientFollowupTableComponent },
  { path: 'add-followup', component: EnterFollowupComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }