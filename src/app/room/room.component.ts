import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { BuildingService } from "../service/building.service";
import { Room } from '../models/room';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  roomDetails:Room;
  setTemp(){return {type:"temparature", value:30, time:'13:30', date:new Date('05, 06, 2020')}};
  setHumidity(){ return {type:"humidity", value:50, time:'13:30',  date:new Date('05, 06, 2020')}};
  constructor(private route: ActivatedRoute, private bs: BuildingService) { }

  ngOnInit() {
    this.subscription=this.route.params.subscribe(params => {
       this.bs.getRoomDetails(params).subscribe(d =>{
        this.roomDetails = d[0];
       });
    });
      
  }

   ngOnDestroy(){
      this.subscription.unsubscribe();
    }

}
