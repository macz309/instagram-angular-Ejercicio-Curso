import { PagesModule } from './pages/pages.modules';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppLogin } from "./login/login.component";
//import { AppHome } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AppLogin,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
