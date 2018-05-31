import { Component, OnInit } from '@angular/core';
import {EmployeeModel} from "./employee-model";
import {EmployeeService} from "./employee.service";

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit {

  public employeeModel: EmployeeModel;

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    this._employeeService.getEmployee().subscribe(empModel => {
      this.employeeModel = empModel;
    });
  }
}
