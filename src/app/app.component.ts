import { Component, OnInit } from '@angular/core';
import { AdItem } from './models/ad-item';
import {  AdService } from './service/ad.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ads: AdItem[];
  title = 'building-managment';
  constructor(private adSer: AdService){}
  ngOnInit(){
    this.ads = this.adSer.getAds();

  }
}
