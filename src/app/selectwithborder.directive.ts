import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[selectBorder]',
})
export class SelectWithBorderDirective {

  @Input() borderColor: string;
  private originalBorder;
  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
    this.originalBorder = this.el.style.border;
  }

  @HostListener('mousedown') onMouseDown() {
    this.select(this.borderColor || "red");
  }

  @HostListener('mouseup') onMouseUp() {
    this.el.style.border = this.originalBorder;
  }


  private select(color: string) {
    this.el.style.border = "1px solid " + color;
  }

}
