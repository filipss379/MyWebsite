import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MobileMenuComponent } from './mobile.menu/mobile.menu.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MobileMenuComponent,
    SignInComponent
  ],
  imports: [
    RouterModule.forRoot([
     { path: 'home', component: HomeComponent },
     { path: 'mobile.menu', component: MobileMenuComponent },
     { path: 'sign-in', component: SignInComponent },
     { path: '', redirectTo: 'home', pathMatch: 'full' },
     { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
