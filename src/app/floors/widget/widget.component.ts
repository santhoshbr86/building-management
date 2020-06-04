import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
 import { Floor } from '../../models/floor';
 
@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  @Input() floor:Floor;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoRoom(r){
    this.router.navigate(['/room', r.id]);
  }

}
