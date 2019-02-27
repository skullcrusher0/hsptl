import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
//import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})




export class SignupComponent implements OnInit {


  constructor(public authService:AuthService) { }
  minDate = new Date(1975, 0, 1);
  maxDate = new Date(2020, 0, 1);

  genders: Gender[] = [
    { value: 'Female', viewValue: 'Female' },
    { value: 'Male', viewValue: 'Male' },
    { value: 'Not Specified', viewValue: 'Prefer Not To Say' }
  ];

  languages: Language[] = [
    { value: 'Hindi', viewValue: 'Hindi' },
    { value: 'English', viewValue: 'English' },
    { value: 'Gujarati', viewValue: 'Gujarati' }
  ];

  doctypes: DocTypes[] = [
    { value: 'Allergist', viewValue: 'Allergist' },
    { value: 'Cardiologist', viewValue: 'Cardiologist' },
    { value: 'Dermatologist', viewValue: 'Dermatologist' },
    { value: 'General Physician', viewValue: 'General Physician' },
    { value: 'Hematologist', viewValue: 'Hematologist' },
    { value: 'Neurologist', viewValue: 'Neurologist' },
    { value: 'Gynecologist', viewValue: 'Gynecologist' },
    { value: 'Ophthalmologist', viewValue: 'Ophthalmologist' },
    { value: 'Pathologist', viewValue: 'Pathologist' },
    { value: 'Pediatrician', viewValue: 'Pediatrician' },
    { value: 'Physiatrist', viewValue: 'Physiatrist' },
    { value: 'Radiologist', viewValue: 'Radiologist' },
    { value: 'General Surgeon', viewValue: 'General Surgeon' }
  ];

  ngOnInit() {
  }

}


export interface Gender {
  value: string;
  viewValue: string;
}

export interface Language {
  value: string;
  viewValue: string;
}


export interface DocTypes {
  value: string;
  viewValue: string;
}