import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeesPresenterService {

  constructor(private fb: FormBuilder) { }

  employee:FormGroup = this.fb.group({
    fullName: [''],
    emailAddress: [''],
    mobileNumber: [''],
    cityName: [''],
    dateHire: [''],
    departmentName: [''],
    gender: [''],
    employeeType: ['false']
  });

}
