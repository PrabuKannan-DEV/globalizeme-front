import { Component, OnInit } from '@angular/core';
import { Occasion } from '../occasion';
import { EventService } from '../services/event.service';
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  editIcon:any=faEdit;
  deleteIcon:any=faTrashCan;
  // events:Occasion[] = [
  //   {
  //     'name': 'iguh',
  //     'description': 'etuiheiugf',
  //     'date': 'hghrjhg'
  //   },
  //   {
  //     'name': '4654',
  //     'description': '3452435',
  //     'date': '23476867'
  //   }
  // ];



  constructor(
    private eventService:EventService,
    private _flashMessagesService: FlashMessagesService
    ) { }

  events:Occasion[]|any;

  ngOnInit(): void {
    this.getEvents();
  }

  deleteEvent(id:any){
    this.eventService.deleteEvent(id).subscribe(
      result => console.log(result),
      error => console.log(error)
    );
    this.getEvents();
    this._flashMessagesService.show('Event Deleted!', {cssClass:'alert-danger', timeout:2000});

  }

  getEvents(){
    this.eventService.getUserEvents().subscribe(
      result => this.events =result,
      error => console.log(error)
    );
    this.events = this.eventService.events;
  }

}
