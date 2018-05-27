import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { ChipsModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/calendar';

import { AppComponent } from './app.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { TestPageComponent } from './test-page/test-page.component';
import { EmployeeCardComponent } from './employee-page/employee-card/employee-card.component';
import { EmployeeInfoComponent } from './employee-page/employee-info/employee-info.component';
import { EmployeeAddInfoComponent } from './employee-page/employee-add-info/employee-add-info.component';
import { EditFieldComponent } from './common/edit-field/edit-field.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeePageComponent,
    TestPageComponent,
    EmployeeCardComponent,
    EmployeeInfoComponent,
    EmployeeAddInfoComponent,
    EditFieldComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    NgbModule.forRoot(),
    FormsModule,
    ChipsModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
