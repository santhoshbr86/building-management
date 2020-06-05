import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EventComponent, AddComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[EventComponent]
})
export class EventModule { }
