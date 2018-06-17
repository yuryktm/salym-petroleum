import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TagsInputModule } from 'ngx-tags-input/dist';
import { BsDatepickerModule, BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { EmployeePageComponent } from './components/employee-page/employee-page.component';
import { TestPageComponent } from './components/test-page/test-page.component';
import { EmployeeCardComponent } from './components/employee-page/employee-card/employee-card.component';
import { EmployeeInfoComponent } from './components/employee-page/employee-info/employee-info.component';
import { EmployeeAddInfoComponent } from './components/employee-page/employee-add-info/employee-add-info.component';
import { EditFieldComponent } from './shared/edit-field/edit-field.component';
import { EmployeeService } from "./components/employee-page/employee.service";
import { PhonePipe } from './shared/pipes/phone.pipe';
import { MaskEditFieldPipe } from './shared/mask-edit-field.pipe';
import { MaskEditFieldComponent } from './shared/mask-edit-field/mask-edit-field.component';
import { MaskFormatterDirective } from './shared/directives/mask-formatter.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmployeePageComponent,
    TestPageComponent,
    EmployeeCardComponent,
    EmployeeInfoComponent,
    EmployeeAddInfoComponent,
    EditFieldComponent,
    PhonePipe,
    MaskEditFieldPipe,
    MaskEditFieldComponent,
    MaskFormatterDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    TooltipModule.forRoot(),
    TagsInputModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

