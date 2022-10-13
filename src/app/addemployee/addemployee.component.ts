import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor() { }

  employeeCode = ""
  employeeName = ""
  designation = ""
  gender = ""
  companyName = ""
  salary = ""
  companyAddress = ""
  mobileNumber = ""
  companyEmail = ""
  yearOfExperience = ""
  bloodGroup = ""
  dateOfBirth = ""

  readValues = ()=>{
   let data = {
    "employeeCode" : this.employeeCode,
    "employeeName" : this.employeeName,
    "designation" : this.designation,
    "gender" : this.gender,
    "companyName" : this.companyName,
    "salary": this.salary,
    "companyAddress" : this.companyAddress,
    "mobileNumber" : this.mobileNumber,
    "companyEmail" : this.companyEmail,
    "yearOfExperience" : this.yearOfExperience,
    "bloodGroup" : this.bloodGroup,
    "dateOfBirth" : this.dateOfBirth
   }
   console.log(data)
    
  }

  ngOnInit(): void {
  }

}
