import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  ngOnInit(): void {
  }
  user=new User();
  registration: FormGroup = new FormGroup({
    name: new FormControl(''),
    // other form controls
  });
  submitForm(){

  }
}
