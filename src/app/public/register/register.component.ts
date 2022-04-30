import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:FormGroup;
  constructor(
    private fb:FormBuilder,
    private http:HttpClient,
    private router:Router,
    private _flashMessagesService: FlashMessagesService
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['',  Validators.required],
      email: ['',  [Validators.required , Validators.email]],
      password: ['',  Validators.required],
      password_confirmation: ['',  Validators.required],
    });
  }

  submit(){
    const formData = this.form.getRawValue();
    this.http.post('http://localhost:8000/api/register', formData).subscribe(
      result => {
        this.router.navigate(['/login']);
        this._flashMessagesService.show('Successfully Registered!', {cssClass:'alert-success', timeout:2000});
      },
      error => console.log(error)
    )
  }

}
