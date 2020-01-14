import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppHome } from './home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppHome,
    NavBarComponent
  ] ,
  imports: [
    RouterModule
  ], 
  providers:[

  ],
  bootstrap: [AppHome]
})

export class HomeModule{

}