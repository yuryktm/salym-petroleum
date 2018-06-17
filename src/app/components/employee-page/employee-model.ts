export class EmployeeModel {
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
    this.imagePath = '../assets/img/ava.jpg';
    this.surname = 'Иванов';
    this.name = 'Иван';
    this.patronymicName = 'Иванович';

    this.phoneNumber = 89211233212;
    this.position = 'водитель';
    this.department = 'd3/d2';
    this.generalContractor = '-';
    this.company = 'SPD';
    this.lineManager = [{displayValue: 'Махов Иван Иванович'}];

    this.drivingLicenseNumber = '43211234';
    this.expirationDate = new Date();
    this.drivingExperience = 7;
    this.drivingLicenseCategory = [{displayValue: 'A'}, {displayValue: 'B'}];
    this.categoryOfTractorDriver = [{displayValue: 'A'}, {displayValue: 'B'}, {displayValue: 'C'}];
  }
}
