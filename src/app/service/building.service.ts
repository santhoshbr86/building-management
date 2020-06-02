import { Injectable } from '@angular/core';
import { Building } from "../models/building";
import { Room } from "../models/room";
import { Floor } from "../models/floor";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  constructor(private http: HttpClient ) { }
  getBuilding():Observable<Building[]>{
   return this.http.get<Building[]>('/assets/resources/building.json');
  }
  getRoomDetails(param):Observable<Room[]>{
    return this.http.get<Room[]>('/assets/resources/room.json').pipe(
     map(data => {
        return data.filter(da => da.id == param.id);
      })
    );
  }
  getFloorDetails(param):Observable<Floor[]>{
    return this.http.get<Floor[]>('/assets/resources/floor.json').pipe(
     map(data => data.filter(fl => fl.name == param.num))
    );
  }
}
