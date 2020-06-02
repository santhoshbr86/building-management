import { Component, OnInit } from '@angular/core';
import { BuildingService } from "../service/building.service";
import { Building } from "../models/building";
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  private building:Building[] = [];

  constructor(private bs: BuildingService) { }

  ngOnInit() {
    this.bs.getBuilding().subscribe(data => {
      this.building = data;
      console.log(this.building);
    });
  }

}
