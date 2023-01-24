import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from './home/home-module/home.module';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActiveDirective } from './header/directive/active.directive';
import { FlexLayoutModule } from '@angular/flex-layout';
const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  declarations: [AppComponent, HeaderComponent, ActiveDirective],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HomeModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
