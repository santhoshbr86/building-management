import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { RoomComponent } from './room/room.component';
// import {FloorsComponent } from './floors/floors.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'floor', loadChildren: () => import('./floors/floors.module').then(l => l.FloorsModule)},
  {path:'home', component:HomeComponent},
  {path:'**', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
