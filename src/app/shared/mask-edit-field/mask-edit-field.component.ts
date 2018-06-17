import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PhonePipe} from "../pipes/phone.pipe";

@Component({
  selector: 'app-mask-edit-field',
  templateUrl: './mask-edit-field.component.html',
  styleUrls: ['./mask-edit-field.component.css']
})
export class MaskEditFieldComponent implements OnInit {

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

  public arrayTagsObjToString(array) {
    return array.map((x)=> x.displayValue).join(', ');
  }

}
