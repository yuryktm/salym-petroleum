import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  public employeeModel: EmployeeModel;  // модель
  public settingsOfFields: any;         // Настройки для генерации полей

  constructor() {
    this.employeeModel = new EmployeeModel();
    this.createSettingsOfFields();
  }

  ngOnInit() {
  }

  private createSettingsOfFields() {
    // label - заголовок
    // fieldName - название поля
    // fieldType - тип поля
    // editableField - флаг, true - если поле редактируемое
    // delimiter - разделитель(линия под полем)
    this.settingsOfFields = [
      { label: 'Номер телефона', fieldName: 'phoneNumber', fieldType: 'number', editableField: true },
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

class EmployeeModel {
  public imagePath: string;                   // фото
  public surname: string;                     // фамилия
  public name: string;                        // имя
  public patronymicName: string;              // отчество

  public phoneNumber: number;                 // Номер телефона
  public position: string;                    // Должность
  public department: string;                  // Департамент
  public generalContractor: string;           // Генподрядчик
  public company: string;                     // Компания
  public lineManager: Array<any>;             // Линейный руководитель

  public drivingLicenseNumber: string;        // Номер в/у
  public expirationDate: any;                 // Дата окончания  срока действия в/у
  public drivingExperience: number;           // Водительский стаж
  public drivingLicenseCategory: Array<any>;  // Категория в/у
  public categoryOfTractorDriver: Array<any>; // Категория машениста-тракториста

  constructor() {
    this.imagePath = '../assets/img/ui-13.jpg';
    this.surname = 'Иванов';
    this.name = 'Иван';
    this.patronymicName = 'Иванович';

    this.phoneNumber = 89211233212;
    this.position = 'водитель';
    this.department = 'd3/d2';
    this.generalContractor = '-';
    this.company = 'SPD';
    this.lineManager = ['Махов Иван Иванович'];

    this.drivingLicenseNumber = '43211234';
    this.expirationDate = new Date();
    this.drivingExperience = 7;
    this.drivingLicenseCategory = ['A', 'B'];
    this.categoryOfTractorDriver = ['A', 'B', 'C'];
  }
}
