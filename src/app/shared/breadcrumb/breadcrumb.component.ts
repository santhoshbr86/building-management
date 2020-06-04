import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router'
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() breadcrumb;
  constructor(private route:ActivatedRoute, private router: Router) {}
  
  ngOnInit() {
   
  }
}
 
  
