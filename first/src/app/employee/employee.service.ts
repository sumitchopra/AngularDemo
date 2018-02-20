import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';


@Injectable()
export class EmployeeService {
    
    
    constructor(private _http: Http) {  }
    
    
    getEmployees(): Observable<IEmployee[]> {
        return this._http.get("http://localhost:3056/api/Employees")
                         .map((response: Response) => <IEmployee[]>response.json())
                         .catch(this.handleError);
    }

    getEmployeebyCode(empCode: string): Observable<IEmployee> {
        return this._http.get("http://localhost:3056/api/Employees/"+empCode)
                         .map((response: Response) => <IEmployee>response.json())
                         .catch(this.handleError);
    }

    handleError(error:Response) {
        console.error(error);
        return Observable.throw(error);
    }

    // getupdatedEmployees():IEmployee[] {
    //     return [
    //         {
    //             code: 'emp101', name: 'Tom2s', gender: 'Male',
    //             annualSalary: 5500, dateOfBirth: '6/25/1988'
    //         },
    //         {
    //             code: 'emp102', name: 'Alex', gender: 'Male',
    //             annualSalary: 57 00.95, dateOfBirth: '9/6/1982'
    //         },
    //         {
    //             code: 'emp103', name: 'Mike1', gender: 'Male',
    //             annualSalary: 5900, dateOfBirth: '12/8/1979'
    //         },
    //         {
    //             code: 'emp104', name: 'Mary', gender: 'Female',
    //             annualSalary: 6500.826, dateOfBirth: '10/14/1980'
    //         },
    //         {
    //             code: 'emp105', name: 'Nancy', gender: 'Female',
    //             annualSalary: 6700.826, dateOfBirth: '12/15/1982'
    //         },
    //         {
    //             code: 'emp106', name: 'Steve', gender: 'Male',
    //             annualSalary: 7700.481, dateOfBirth: '11/18/1979'
    //         },
    //     ];
    // }
}
