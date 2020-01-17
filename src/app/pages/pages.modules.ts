import { PublishmentService } from './service/publishment';
import { BrowserModule } from '@angular/platform-browser';

import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PublishmentComponent } from './publishment/publishment.component';
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
declarations:[
    PublishmentComponent,
    ProfileComponent,
    EditComponent
],
imports:[
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    PagesRoutingModule
],
providers:[
    PublishmentService
],
bootstrap:[]
})

export class PagesModule{

}