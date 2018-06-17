import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';
import {PhonePipe} from "../pipes/phone.pipe";

@Directive({
  selector: '[appMaskFormatter]'
})
export class MaskFormatterDirective implements OnInit{

  private el: HTMLInputElement;
  private phonePipe: PhonePipe;

  constructor(
      elementRef: ElementRef,
      // доступ к определенному узлу дом-дерева
      //ссылка на элемент на который установлена деректива
     ///phoneP: PhonePipe
  ) {
    this.el = elementRef.nativeElement;
    this.phonePipe = new PhonePipe();
  }

  ngOnInit() {
   this.el.value = this.phonePipe.transform(this.el.value);
  }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value) {
    this.el.value = this.phonePipe.parse(value); // opossite of transform
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    this.el.value = this.phonePipe.transform(value);
  }
}
