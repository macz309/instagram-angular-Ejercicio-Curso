import { EditComponent } from './edit/edit.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PublishmentComponent } from './publishment/publishment.component';
import { ProfileComponent } from './profile/profile.component';

export const PagesRoutes=[
    {
        path: "",
        component: PublishmentComponent
    },
    {
        path: "perfil",
        component: ProfileComponent
    },
    {
        path: "editar-perfil",
        component: EditComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild([
        {
            path: "",
            component: PublishmentComponent
        },
        {
            path: "perfil",
            component: ProfileComponent
        },
        {
            path: "editar-perfil",
            component: EditComponent
        }
    ])]
})

export class PagesRoutingModule{}