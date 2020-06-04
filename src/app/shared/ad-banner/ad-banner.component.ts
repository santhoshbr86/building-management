import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver} from '@angular/core';
import { AdBannerDirective } from '../ad-banner.directive';
import { AdComponent } from '../ad/ad.component';
@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss']
})
export class AdBannerComponent implements OnInit {
    @Input() ads: any[];
    currentAdIndex = -1;
    @ViewChild(AdBannerDirective, {static: true}) 
    adHost: AdBannerDirective;
    interval: any;
    constructor (private componentFactoryResolver: ComponentFactoryResolver){}
    ngOnInit() {
      this.loadComponent();
      this.getAds(); 
    }
    ngOnDestroy(){
      clearInterval(this.interval);
    }
    loadComponent(){ 
      this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
      const adItem = this.ads[this.currentAdIndex];
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
      const viewContainerRef = this.adHost.viewContainerref;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<AdComponent>componentRef.instance).data = adItem.data;
    }
    getAds() { 
    this.interval = setInterval(() => {
    this.loadComponent();
    }, 3000);
    }

}
