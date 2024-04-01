import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employe-count',
  templateUrl: './employe-count.component.html',
  styleUrl: './employe-count.component.css',
  inputs: ['count', 'empcount'],
})
export class EmployeCountComponent {
  @Input('total') all: number = 0;
  @Input() male: number = 0;
  @Input() female: number = 0;
  // @Input() count: number = 0;
  count: number = 0;
  empcount: number = 0;
}
