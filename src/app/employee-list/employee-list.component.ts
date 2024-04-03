import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeDataService } from '../employee-data.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  newData: Employee[] = [];
  receiveFilteredEmployees(filteredData: Employee[]) {
    this.newData = filteredData;
  }
  // employees: Employee[] = [
  //   { id: 100, name: 'Avinash Kumar', gender: 'Male', salary: 30000 },
  //   { id: 101, name: 'Raj Kumar', gender: 'Male', salary: 23000 },
  //   { id: 102, name: 'Rajib Kumar', gender: 'Male', salary: 24000 },
  //   { id: 103, name: 'Amisha Kumari', gender: 'Female', salary: 40000 },
  //   { id: 104, name: 'Rupashree Kumari', gender: 'Female', salary: 22000 },
  //   { id: 105, name: 'Padmini Kumari', gender: 'Female', salary: 12000 },
  //   { id: 106, name: 'Akash Kumar', gender: 'Male', salary: 12000 },
  //   { id: 107, name: 'Shubhashree Kumari', gender: 'Female', salary: 12000 },
  //   { id: 108, name: 'Partha Kumari', gender: 'Female', salary: 12000 },
  //   { id: 109, name: 'Rajashree Mohanty', gender: 'Female', salary: 12000 },
  // ];
  employees: Employee[] = [];
  constructor(private _employeeService: EmployeeDataService) {
    //
  }
  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    // console.log(this.employees);
  }

  totalCount() {
    // console.log(this.employees);

    return this.employees.length;
  }
  maleCount() {
    return this.employees.filter((emp: any) => emp.gender == 'Male').length;
  }
  femaleCount() {
    return this.employees.filter((emp: any) => emp.gender == 'Female').length;
  }
  counter = 5;
  increment() {
    //
    this.counter++;
  }

  decrement() {
    //
    this.counter--;
  }
}
