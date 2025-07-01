import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterOutlet } from "@angular/router";
import { AuthStateLogin } from "../../shared/services/AuthStateLogin.service";
import { AsideComponent } from "./aside/aside.component";
import { NavBarComponent } from "./navbar/navbar.component";
import { LoginUserModel } from "../../models/signIn";

@Component({
    selector: 'home-component',
    imports: [
        FormsModule,
        CommonModule,
        AsideComponent,
        NavBarComponent,
    ],
    templateUrl: './home.component.html',
    standalone: true,
    providers: [AuthStateLogin]
})
export class HomeComponent implements OnInit {
    firstNameUser:string = '';
    data_pemissions!:LoginUserModel;

    constructor(
        private authState:AuthStateLogin,
        private router:Router
    ){}

    ngOnInit(){
        this.authState.user$.subscribe((res) => {
            if(res) this.data_pemissions = res;
            else this.router.navigate(['/'])
        });
    }
}