import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {
// gender = "male";
// contact = "phone";
// isActive = true;
  constructor() { }

  ngOnInit() {
  }
  saveEmployee(empForm: NgForm): void {
    console.log(empForm);
  }
}
