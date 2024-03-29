import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  data: string = 'This is Paragraph';
  counter: number = 0;
  message: string = 'Hello World';
  classToApply: string = 'bold italic';
  change() {
    this.data = 'Welcome to Event Binding Chapter';
  }
  changeMessage(event: any) {
    this.counter += 1;
    this.message = event.target.value;
  }
  detectEvent(event: any) {
    this.message = event.target.value;
    let btn = event as HTMLButtonElement;
  }
  firstName: string = 'Alok';
  lastName: string = 'Kumar';
  branch: string = 'CSE';
  mobile: string = '9797979797';
  gender: string = 'Male';
  age: number = 30;

  // showDetails: boolean = false;
  showDetails: boolean = false;
  toggle() {
    console.log(this.showDetails);
    this.showDetails = !this.showDetails;
  }
  text: string = 'Welcome to angular';
  changeText(event: any) {
    this.text = event.target.value;
    // console.log(this.text);
  }
}
