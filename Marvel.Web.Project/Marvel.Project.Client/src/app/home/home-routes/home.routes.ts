import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
//   { path: '', redirectTo: '/home' },
];

@NgModule({
    declarations:[

    ],
    imports:[
        RouterModule.forChild(appRoutes)
    ],
    exports:[

    ]
})
export class HomeRoutes {}
