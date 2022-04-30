import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loggedIn = false;

  constructor(private _flashMessagesService: FlashMessagesService){
  }
  ngOnInit(){
    this.loggedIn = localStorage.getItem('token') !== null;
  }

  logout(){
    localStorage.removeItem('token');
    this.loggedIn = false;
    this._flashMessagesService.show('Logged Out', {cssClass:'alert-danger', timeout:2000})}
}

