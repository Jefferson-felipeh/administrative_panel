import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { RegisterComponent } from './modules/register/register.component';
import { MenusComponent } from './modules/menus/menus.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { BodyComponent } from './modules/home/body/body.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'menus', component: MenusComponent
            },
            {
                path: 'perfil', component: ProfileComponent
            },
            {
                path: 'body',
                component: BodyComponent
            },
            {
                path: '',
                redirectTo: 'body',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'register', component: RegisterComponent
    },
];
