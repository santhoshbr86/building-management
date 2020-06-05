import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Bevent } from '../../models/bevent';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
   public beventForm = new FormGroup({
     eventName: new FormControl(),
        eventDate: new FormControl(),
        eventTime: new FormControl(),
        eventDuration: new FormControl(),
        eventType: new FormControl(),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.beventForm = this.fb.group({
        eventName:['', Validators.required],
        eventDate:['', Validators.required],
        eventTime:['', Validators.required],
        eventDuration:['', Validators.required],
        eventType:['', Validators.required]
    });
  }

}
