import { Component } from '@angular/core';

@Component({
  selector: 'app-if-demo',
  templateUrl: './if-demo.component.html',
  styleUrl: './if-demo.component.css',
})
export class IfDemoComponent {
  isValid: boolean = true;
  validate(prameter: string) {
    if (prameter === 'valid') {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
    // this.isValid = !this.isValid;
  }
  books: string[] = ['C', 'Java', 'C++', 'PHP'];
}
