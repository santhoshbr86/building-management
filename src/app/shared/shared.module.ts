import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { AdBannerDirective } from './ad-banner.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { JobComponent } from './job/job.component';

@NgModule({
  declarations: [BreadcrumbComponent, AdBannerDirective, AdBannerComponent, JobComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BreadcrumbComponent,
    AdBannerComponent,
    AdBannerDirective,
    JobComponent
  ],
  entryComponents:[JobComponent],
})
export class SharedModule { }
