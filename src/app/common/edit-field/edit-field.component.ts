import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-edit-field',
  templateUrl: './edit-field.component.html',
  styleUrls: ['./edit-field.component.css']
})
export class EditFieldComponent implements OnInit {

  @Input() value;
  @Input() fieldType;
  @Output('valueChanged') valueChanged: EventEmitter<any> = new EventEmitter();

  public isEdit: boolean;
  public val: string;

  constructor() {
    this.isEdit = false;
  }

  ngOnInit() {
    this.val = this.value;
  }

  public onSave() {
    this.isEdit = false;
    this.valueChanged.emit(this.val);
  }

  public onCancel() {
    this.isEdit = false;
    this.val = this.value;
  }

  public onEdit() {
    this.isEdit = true;
  }
}
