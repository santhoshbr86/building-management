import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloorsComponent } from './floors.component';
import { FloorsRoutingModule } from './floors-routing.module';

@NgModule({
  declarations: [FloorsComponent],
  imports: [
    CommonModule,
    FloorsRoutingModule
  ]
})
export class FloorsModule { }
