import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {  EventModule } from '../event/event.module';

import { FloorsComponent } from './floors.component';
import { RoomComponent } from './room/room.component';
import { FloorsRoutingModule } from './floors-routing.module';
import { WidgetComponent } from './widget/widget.component';
import { SharedModule } from '../shared/shared.module';
import { FloorComponent } from './floor/floor.component';

@NgModule({
  declarations: [FloorsComponent, WidgetComponent, RoomComponent, FloorComponent],
   imports: [
    CommonModule,
    RouterModule,
    FloorsRoutingModule,
    SharedModule,
    EventModule,
    NgCircleProgressModule.forRoot({}),
  ],
  exports: [FloorsComponent, RoomComponent]
})
export class FloorsModule { }
