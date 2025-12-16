import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @Input() appHighlight = '';
  @Input() highlightColor = 'yellow';

  private originalColor: string | null = null;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    // Set transition on initialization
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'background-color 0.3s ease');
  }

  @HostListener('mouseenter') onMouseEnter() {
    // Save original color if not already saved
    if (this.originalColor === null) {
      this.originalColor = this.el.nativeElement.style.backgroundColor || 'transparent';
    }
    const highlightColor = this.appHighlight || this.highlightColor;
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    // Restore original color
    this.renderer.setStyle(
      this.el.nativeElement,
      'backgroundColor',
      this.originalColor || 'transparent'
    );
  }
}
