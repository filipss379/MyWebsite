import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MobileMenuComponent } from './mobile.menu.component/mobile.menu.component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MobileMenuComponent
  ],
  imports: [
    RouterModule.forRoot([
     { path: 'home', component: HomeComponent },
     { path: 'mobile.menu.component', component: MobileMenuComponent},
     { path: '', redirectTo: 'home', pathMatch: 'full'},
     { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
