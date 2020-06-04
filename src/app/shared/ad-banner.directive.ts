import { Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appAdBanner]'
})
export class AdBannerDirective {

  constructor(public viewContainerref:ViewContainerRef) { }

}
