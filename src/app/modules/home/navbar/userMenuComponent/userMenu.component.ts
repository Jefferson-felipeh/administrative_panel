import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthStateLogin } from "../../../../shared/services/AuthStateLogin.service";

@Component({
    selector: 'user-menu-component',
    templateUrl: './userMenu.component.html',
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [AuthStateLogin],
    standalone: true,
})
export class UserMenuComponent {
    menuOpen = false;
    userPhoto = 'assets/images/avatar.jpg'; // ou vindo de um serviço de autenticação

    constructor(
        private authState:AuthStateLogin,
        private router:Router
    ){}

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }

    signUp = () => {
        this.authState.clearuser();
        this.router.navigate(['/']);
    }
}