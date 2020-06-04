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
import { SharedModule } from './shared/shared.module';
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
    SharedModule,
    RouterTestingModule
  ],
  providers: [BuildingService],
  bootstrap: [AppComponent],
  entryComponents:[],
  exports:[ NavComponent]
  })
export class AppModule { }
