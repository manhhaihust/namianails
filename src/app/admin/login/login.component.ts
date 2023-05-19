import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {




  constructor() {}

  loginForm: FormGroup; 
  ngOnInit(): void {
    
    this.loginForm = new FormGroup ({
      email: new FormControl(),
      pass: new FormControl()

    })
  }

  onSubmit(){
    console.log(this.loginForm);
  }


  
}
