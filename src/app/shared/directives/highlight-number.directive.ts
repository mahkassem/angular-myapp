import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[HighlightNumber]'
})
export class HighlightNumberDirective {

  constructor(private el: ElementRef) { }

  ngAfterContentInit() {
    // get element innerHTML value
    const value = this.el.nativeElement.innerHTML

    // convert to number
    const number = Number(value)

    // 1 > 33 green
    // 33 > 66 orange
    // 66 > 100 red
    if (number > 66) {
      this.el.nativeElement.style.color = 'red'
    }

    if (number > 33 && number <= 66) {
      this.el.nativeElement.style.color = 'orange'
    }

    if (number <= 33) {
      this.el.nativeElement.style.color = 'green'
    }
  }
}
