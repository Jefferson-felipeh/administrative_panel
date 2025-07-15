import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule, RouterOutlet } from "@angular/router";
import { AuthStateLogin } from "../../shared/services/AuthStateLogin.service";
import { AsideComponent } from "./aside/aside.component";
import { NavBarComponent } from "./navbar/navbar.component";
import { LoginUserModel, TokenDto } from "../../models/signIn";
import { filter, take } from "rxjs";
import { HomeService } from "./home.service";
import { FindUserService } from "../../shared/services/findUser.service";

@Component({
    selector: 'home-component',
    imports: [
    FormsModule,
    CommonModule,
    AsideComponent,
    NavBarComponent,
    RouterModule,
],
    templateUrl: './home.component.html',
    standalone: true,
    providers: []
})
export class HomeComponent implements OnInit {
    firstNameUser: string = '';
    data_pemissions!: LoginUserModel;
    token!:string;
    openSideMenu!:boolean;
    formatAside:string = '-translate-x-full lg:translate-x-0';

    constructor(
        private homeService:HomeService
    ) { }

    ngOnInit() {
        const data_user = this.homeService.getAll();
        data_user.subscribe({
            next:(res) => {
                console.log(res);
                this.data_pemissions = res;
            },
            error: (error) => console.log(error)
        });
    }

    click = (event:boolean) => this.openSideMenu = event;
}