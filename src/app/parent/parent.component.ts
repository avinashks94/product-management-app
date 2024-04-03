import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  title = 'Parent component';
  counter = 20;
  countChangedHandler(count: number) {
    // this.counter = count;
    console.log(count);
  }
}
