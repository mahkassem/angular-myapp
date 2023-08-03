import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[NotZero]'
})
export class NotZeroDirective {
  private hasView = false

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set NotZero(condition: number) {
    if (condition > 0) {
      this.viewContainer.createEmbeddedView(this.templateRef)
      this.hasView = true
    } else if (condition <= 0 && this.hasView) {
      this.viewContainer.clear()
      this.hasView = false
    }
  }

}
