import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  form:FormGroup;

  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      phoneNo: [''],
      email: ['', Validators.email],
      password: ['',[Validators.minLength(8),Validators.required]],
      confirmPassword: ['',Validators.required]
      });
   }

  ngOnInit(): void {
  }
  submitForm(){
    alert(JSON.stringify(this.form.value))
  }
}
