import { Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'search-body', component: BodyComponent },
];
