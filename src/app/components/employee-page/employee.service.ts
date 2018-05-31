import { Injectable } from '@angular/core';
import { EmployeeModel } from "./employee-model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class EmployeeService {

  private employee: EmployeeModel;

  constructor() {
    this.employee =  new EmployeeModel();
  }

  public getEmployee(): Observable<EmployeeModel>{

    const result: Observable<EmployeeModel> = new Observable<EmployeeModel>(observer => {
      observer.next(this.employee);
      observer.complete();
    });

    return result;
  }
}
