import { Routes } from '@angular/router';
import {EmployeePageComponent} from './employee-page/employee-page.component';
import {TestPageComponent} from './test-page/test-page.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'employee-page', pathMatch: 'full' },
  { path: 'employee-page', component: EmployeePageComponent },
  { path: 'test-page', component: TestPageComponent }];
