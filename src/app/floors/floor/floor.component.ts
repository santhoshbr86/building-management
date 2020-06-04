import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BuildingService } from "../../service/building.service";
import { Floor } from '../../models/floor';
@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})
export class FloorComponent implements OnInit {
  floorDetails:Floor[]=[];
  breadcrumb:any;
  constructor(private route: ActivatedRoute, private bs: BuildingService, private router: Router) { }

  ngOnInit() {
     this.route.params.subscribe(params => {
       this.breadcrumb = `Floor${params.num}`;
       this.bs.getFloorDetails(params).subscribe(d =>{
         console.log(d);
        this.floorDetails = d;
       });
    });
  }

}
