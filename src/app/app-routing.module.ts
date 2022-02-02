import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersTableComponent } from './users-table/users-table.component';

const routes: Routes = [{
  path: '', component: UsersTableComponent,
  // children: [
  //   { path: 'dashboard', component: EmployeeDashboardComponent },
  //   { path: 'jobs-list', component: JobsListComponent },
  //   { path: 'job-details/:id', component: JobDetailsComponent },
  //   { path: 'profile', component: JobEmployeeDetailsComponent },
  //   { path: 'job-success', component: JobSuccessComponent },
  // ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
