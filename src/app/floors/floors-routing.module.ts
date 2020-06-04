import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FloorsComponent } from './floors.component';
import { RoomComponent } from './room/room.component';
import { FloorComponent } from './floor/floor.component';
const routes: Routes = [
  { path:'', component: FloorsComponent,
    children:[
      { path:':num/:id', component: RoomComponent },
      { path:':num', component: FloorComponent}
    ]
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloorsRoutingModule { }
