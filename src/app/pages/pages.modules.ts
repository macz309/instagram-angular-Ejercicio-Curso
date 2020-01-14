import { BrowserModule } from '@angular/platform-browser';

import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PublishmentComponent } from './publishment/publishment.component';
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
declarations:[
    PublishmentComponent,
    ProfileComponent,
    EditComponent
],
imports:[
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    RouterModule,
    PagesRoutingModule
],
providers:[

],
bootstrap:[]
})

export class PagesModule{

}