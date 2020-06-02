import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BuildingService } from './service/building.service';
import { RoomComponent } from './room/room.component';
import { FloorsModule  } from './floors/floors.module';
import {  EventModule } from './event/event.module';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RoomComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FloorsModule,
    NgCircleProgressModule.forRoot(),
    EventModule
  ],
  providers: [BuildingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
