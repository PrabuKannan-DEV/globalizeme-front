import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { switchMap } from 'rxjs/operators';
import { Occasion } from 'src/app/secure/occasion';
import { EventService } from 'src/app/secure/services/event.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  event: Occasion | any;
  form: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    private fb: FormBuilder,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit(): void {
    this.event = this.route.paramMap.pipe(
      switchMap((params: ParamMap): any =>
        this.eventService.getEvent(params.get('id')!))
    ).subscribe(
      result => this.event = result
    );
    this.form = this.fb.group({
      name: [this.event.name, Validators.required],
      description: [this.event.description, Validators.required],
      date: [this.event.date, Validators.required],
    });
  }

  submit() {
    let formData = this.form.getRawValue();
    if (formData.name === null) {
      formData.name = this.event.name;
    }
    if (formData.description === null) {
      formData.description = this.event.description;
    }
    if (formData.date === null) {
      formData.date = this.event.date;
    }
    console.log(formData)
    this.eventService.updateEvent(this.event.id, formData)
      .subscribe(
        result => {
          this.event = result
          this.router.navigate(['/secure']);
          this._flashMessagesService.show('Updated Successfully!', { cssClass: 'alert-warning', timeout: 2000 });
        },
        error => console.log(error)
      )
  }

}
