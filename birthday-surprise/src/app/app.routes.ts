import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { SurpriseComponent } from './components/surprise/surprise';
import { PlaylistComponent } from './components/playlist/playlist';
import { FinalMessage } from './components/final-message/final-message';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'surprise', component: SurpriseComponent },
  { path: 'playlist', component: PlaylistComponent },
  { path: 'final-message', component: FinalMessage },
  { path: '**', redirectTo: '' }
];