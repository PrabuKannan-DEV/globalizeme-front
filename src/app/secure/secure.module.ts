import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './events/event/edit/edit.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'      //Import here



@NgModule({
  declarations: [
    EventsComponent,
    EventComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class SecureModule { }
