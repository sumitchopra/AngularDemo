import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service'



@Component ({
    selector: 'list-employee',
    templateUrl: './employeeList.component.html',
    styleUrls: ['./employeeList.component.css']
})


export class EmployeeListComponent implements OnInit {
employees: IEmployee[];
    constructor(private _employeeService: EmployeeService){
    }
    ngOnInit() {
    this._employeeService.getEmployees()
        .subscribe(employeesData => this.employees = employeesData,
                    (error) => { 
                        this.statusMessage = "Problem with the service. Please try again";
                        console.error(error);
                     });
    }
    // getEmployees():void {
    //     this.employees = this._employeeService.getupdatedEmployees();   
    // }
    trackbyEmpList(index:number, employee: any) : string {
        return employee.code;
    }
    selectedEmployeeCountRadioButton: string = 'All';
    statusMessage : string = 'Loading Data.... PLease wait...';
    getTotalEmployeesCount(): number{
        return this.employees.length;
    }
    getMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender.toLowerCase() === "male").length;
    }
    getFemaleEmployeeCount(): number {
        return this.employees.filter(e=> e.gender.toLowerCase() === "female").length;
    }
    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        console.log(selectedRadioButtonValue); 
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
}