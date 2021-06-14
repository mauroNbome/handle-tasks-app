import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'colorizeBalance',
})
export class ColorizeBalancePipe implements PipeTransform {
  constructor(private DomSanitizer: DomSanitizer) {}

  transform(value: any): SafeHtml {
    let currentBalance = String(value);
    let splittedValue = currentBalance.split('.');
    let second;
    let result;

    if (splittedValue[1]) {
      second = splittedValue[1];

      second = `<strong style="color: #3d3f43>${second}</strong>`;

      result = `${splittedValue[0]}${second}`;
      return this.DomSanitizer.bypassSecurityTrustHtml(result);
    } else {
      return this.DomSanitizer.bypassSecurityTrustHtml(splittedValue[0]);
    }
  }
}
