import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { RegisterComponent } from './modules/register/register.component';

export const routes: Routes = [
    {
        path: '',redirectTo:'login',pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'home',component: HomeComponent
    },
    {
        path: 'register', component: RegisterComponent
    }
];
