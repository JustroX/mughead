import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { sanitize } from 'dompurify';

@Pipe({
  name: 'safeHTML',
})
export class SafeHTMLPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}
  transform(value: string | null | undefined) {
    const clean = sanitize(value ?? '');
    return this.sanitized.bypassSecurityTrustHtml(clean);
  }
}
