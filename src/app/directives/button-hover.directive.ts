import { Directive, ElementRef, Input, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonHover]'
})
export class ButtonHoverDirective {
  @Input() defaultBackground: string = '#821328';
  @Input() hoverBackground: string = '#a52d3d';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setBackground(this.defaultBackground);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackground(this.hoverBackground);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackground(this.defaultBackground);
  }

  private setBackground(color: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'background', color);
  }
}
