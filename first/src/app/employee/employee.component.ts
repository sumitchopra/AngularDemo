import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Observable } from 'rxjs/Observable';
// Import rxjs operator
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retrywhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';

@Component ({
    selector: 'employee-app',
    templateUrl:'./employee.component.html',
    styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
    employee : IEmployee;
    statusMessage ; String = 'Loading data Please wait....';

    constructor(private _employeeService:EmployeeService, 
                private _activatedRoute:ActivatedRoute,
                private _router: Router)
    {
        
    }

    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployeebyCode(empCode)
            .retryWhen((err) => {
                return err.scan((retryCount, val) => {
                    retryCount += 1;
                    if (retryCount < 6) {
                        this.statusMessage = 'Retrying...Attempt #' + retryCount;
                        return retryCount;
                    }
                    else {
                        throw (err);
                    }
                }, 0).delay(1000)
            })
            .subscribe((employeeData) => {
                if (employeeData == null) {
                    this.statusMessage =
                        'Employee with the specified Employee Code does not exist';
                }
                else {
                    this.employee = employeeData;
                }
            },
            (error) => {
                this.statusMessage =
                    'Problem with the service. Please try again after sometime';
                console.error(error);
            });
    }
    
    onBackButtonClick() {
        this._router.navigate(['/employees']);
    }
}
    
    // columnSpan: number = 2;
    // firstName: string = 'Sumit';
    // lastName: string = 'Chopra';
    // gender: string = 'Male';
    // age: number = 30;
    // showDetails: boolean = false;

    // toggleDetails() : void {
    //     this.showDetails = !this.showDetails;
    // }

//}