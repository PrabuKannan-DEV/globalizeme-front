import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { Occasion } from '../../occasion';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  event:any;
  form:FormGroup;
  constructor(
    private fb:FormBuilder,
    private eventService:EventService,
    private router:Router,
    private _flashMessagesService: FlashMessagesService
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  submit(){
    let formData = this.form.getRawValue();
    this.eventService.storeEvent(formData)
    .subscribe(
      result => {
        this.event = result
        this.router.navigate(['/secure']);
        this._flashMessagesService.show('New Event Created!', {cssClass:'alert-success', timeout:2000});
      },
      error => {console.log(error)
        this._flashMessagesService.show(error.error.message, {cssClass:'alert-danger', timeout:2000})}
    )
  }

}
