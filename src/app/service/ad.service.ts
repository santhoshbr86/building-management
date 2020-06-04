import { Injectable }           from '@angular/core';
import { HomeComponent }   from '../home/home.component';
import { JobComponent} from '../shared/job/job.component';
// import { HeroProfileComponent } from './hero-profile.component';
import { AdItem }               from '../models/ad-item';
@Injectable({
  providedIn: 'root'
})
export class AdService {
  getAds() {
    return [
      new AdItem(JobComponent, {name: 'Bombasto', bio: 'Brave as they come'}),
       new AdItem(JobComponent, {name: 'Snaa', bio: 'List as they come'}),
    ];
  }
}