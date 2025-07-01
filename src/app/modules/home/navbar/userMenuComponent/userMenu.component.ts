import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { AuthStateLogin } from "../../../../shared/services/AuthStateLogin.service";
import { ProfileListInterface } from "../../../../models/profileList";
import { UserMenuService } from "./userMenu.service";
import { Menu } from "../../../../models/signIn";
import { FindMenus } from "../../../../shared/services/findMenus.service";

@Component({
    selector: 'user-menu-component',
    templateUrl: './userMenu.component.html',
    imports: [
        CommonModule,
        FormsModule,
        RouterLink
    ],
    providers: [
        UserMenuService,
        AuthStateLogin,
        FindMenus
    ],
    standalone: true,
})
export class UserMenuComponent implements OnInit {
    @Input() profilesList!: []
    menuOpen = false;
    dataProfiles!:ProfileListInterface[];
    dataMenus!: Menu;

    ngOnInit(): void {
        const profiles = this.userMenuService.getProfiles();

        profiles.subscribe({
            next: (response) => {
                this.dataProfiles = response;
            },
            error: (error) => console.log(error)
        });
    }

    constructor(
        private authState: AuthStateLogin,
        private router: Router,
        private userMenuService: UserMenuService,
        private findMenus:FindMenus
    ) { }

    toggleMenu = () => this.menuOpen = !this.menuOpen;

    signUp = () => {
        this.authState.clearuser();
        this.router.navigate(['/']);
    }

    atributt_navigate() {
        if(this.dataProfiles.filter(e => e.path === '/menus')) this.getMenus();
    }

    getMenus() {
        const menus = this.userMenuService.getMenus();

        menus.subscribe({
            next: (response) => {
                this.dataMenus = response;
                this.findMenus.setUser(this.dataMenus);
            },
            error: (error) => {
                console.log(error);
            }
        });
    }
}