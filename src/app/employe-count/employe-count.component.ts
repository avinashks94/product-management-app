import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { Employee } from '../employee';
import { EmployeeDataService } from '../employee-data.service';
import { getLocaleMonthNames } from '@angular/common';
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
  @Output() filteredEmployees = new EventEmitter<any>();
  count: number = 0;
  empcount: number = 0;

  allEmployee: Employee[] = [];
  constructor(private _employeeService: EmployeeDataService) {}

  ngOnInit() {
    this.allEmployee = this._employeeService.getEmployees();
    this.displayAll();
  }

  displayFemale() {
    this.filteredEmployees.emit(
      this.allEmployee.filter((emp) => emp.gender === 'Female')
    );
  }

  displayMale() {
    this.filteredEmployees.emit(
      this.allEmployee.filter((emp) => emp.gender === 'Male')
    );
  }

  displayAll() {
    this.filteredEmployees.emit(this.allEmployee);
  }
}
