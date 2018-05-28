import { Injectable } from '@angular/core';
import { EmployeeModel } from "./employee-model";

@Injectable()
export class EmployeeService {

  private employee: EmployeeModel;

  constructor() {
    this.employee =  new EmployeeModel();
  }

  public getEmployee(){
    return this.employee;
  }
}
