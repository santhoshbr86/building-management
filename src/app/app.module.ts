import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BuildingService } from './service/building.service';
// import { RoomComponent } from './room/room.component';
import { FloorsModule  } from './floors/floors.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    RouterTestingModule
  ],
  providers: [BuildingService],
  bootstrap: [AppComponent],
  exports:[ NavComponent]
  })
export class AppModule { }
