import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BuildingService } from "../service/building.service";
import { Floor } from '../models/floor';
@Component({
  selector: 'app-floors',
  templateUrl: './floors.component.html',
  styleUrls: ['./floors.component.scss']
})
export class FloorsComponent implements OnInit {
  floorDetails:Floor[]=[];
  constructor(private route: ActivatedRoute, private bs: BuildingService, private router: Router) { }

  ngOnInit() {
     this.route.params.subscribe(params => {
       this.bs.getFloorDetails(params).subscribe(d =>{
        this.floorDetails = d;
       });
    });
  }
  gotoRoom(r){
    this.router.navigate(['/room', r.id]);
  }

}
