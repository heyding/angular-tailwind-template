import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
  standalone: true,
  pure: false, // Allow updates on every change detection cycle
})
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, search: string): SafeHtml {
    if (!search || !value) {
      return value;
    }

    const sanitizedValue = this.sanitizer.sanitize(SecurityContext.HTML, value) || value;
    const regex = new RegExp(search, 'gi');
    const highlighted = sanitizedValue.replace(
      regex,
      match => `<mark class="bg-yellow-200">${match}</mark>`
    );

    return this.sanitizer.bypassSecurityTrustHtml(highlighted);
  }
}
