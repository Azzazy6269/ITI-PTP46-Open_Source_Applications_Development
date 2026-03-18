import { Directive, ElementRef, HostListener, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppDisableAfterClick]',
})
export class AppDisableAfterClick {
  constructor(private ele: ElementRef, private render2: Renderer2) {
  }
  @HostListener('click')
  onClick() {
    this.render2.setAttribute(this.ele.nativeElement, 'disabled', 'true');
    this.render2.setProperty(this.ele.nativeElement, 'textContent', 'Processing...');
    setTimeout(()=>{this.render2.setProperty(this.ele.nativeElement, 'textContent', 'Enrolled');},3000)
 }
}
