import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  constructor(
    private fb:FormBuilder,
    private http: HttpClient,
    private router:Router,
    private _flashMessagesService: FlashMessagesService
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email:'',
      password: ''
    });
  }

  submit(){
    const formData = this.form.getRawValue();
    const data ={
      username: formData.email,
      password: formData.password,
      grant_type: 'password',
      client_id: 2,
      client_secret: '1KwO8PDteacrYCXHrxhi01aEEIzrdSZRqPeOU7x1',
      scope: '*'
    }

    this.http.post('http://localhost:8000/oauth/token', data)
    .subscribe((result:any) => {
      localStorage.setItem('token', result.access_token);
      this.router.navigate(['/secure']);
      this._flashMessagesService.show('Welcome to your home page!', {cssClass:'alert-success', timeout:1000});
    },
    error => {
      console.log('error');
      console.log(error)
    });
  }

}
