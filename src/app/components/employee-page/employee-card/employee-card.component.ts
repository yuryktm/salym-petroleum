import {Component, Input, OnInit} from '@angular/core';
import { EmployeeService } from "../employee.service";
import { EmployeeModel } from "../employee-model";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  @Input() employeeModel: EmployeeModel;
  public settingsOfFields: any;         // Настройки для генерации полей

  constructor() {}

  ngOnInit() {
    this.createSettingsOfFields();
  }

  private createSettingsOfFields() {
    // label - заголовок
    // fieldName - название поля
    // fieldType - тип поля
    // editableField - флаг, true - если поле редактируемое
    // delimiter - разделитель(линия под полем)
    this.settingsOfFields = [
      { label: 'Номер телефона', fieldName: 'phoneNumber', fieldType: 'text', editableField: true },
      { label: 'Должность', fieldName: 'position', fieldType: 'text', editableField: false },
      { label: 'Департамент', fieldName: 'department', fieldType: 'text', editableField: false },
      { label: 'Генподрядчик', fieldName: 'generalContractor', fieldType: 'text', editableField: false },
      { label: 'Компания', fieldName: 'company', fieldType: 'text', editableField: false },
      { label: 'Линейный руководитель', fieldName: 'lineManager', fieldType: 'tags', editableField: true, delimiter: true},

      { label: 'Номер в/у', fieldName: 'drivingLicenseNumber', fieldType: 'text', editableField: true },
      { label: 'Дата окончания  срока действия в/у', fieldName: 'expirationDate', fieldType: 'date', editableField: true },
      { label: 'Водительский стаж', fieldName: 'drivingExperience', fieldType: 'number', editableField: true },
      { label: 'Категория в/у', fieldName: 'drivingLicenseCategory', fieldType: 'tags', editableField: true},
      { label: 'Категория машениста-тракториста', fieldName: 'categoryOfTractorDriver', fieldType: 'tags', editableField: true}
    ];
  }
}

