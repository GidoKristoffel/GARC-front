import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output
} from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {
  @Output() clickOutside: EventEmitter<void> = new EventEmitter<void>();
  private initialized = false;

  constructor(private elementRef: ElementRef) {
    setInterval(() => {
      this.initialized = true;
    }, 0);
  }

  @HostListener('document:click', ['$event.target'])
  onClick(target: any): void {
    if (this.initialized) {
      const clickedInside = this.elementRef.nativeElement.contains(target);

      if (!clickedInside) {
        this.clickOutside.emit();
      }
    }
  }
}