import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthStateLogin } from "../../../shared/services/AuthStateLogin.service";
import { Menu } from "../../../models/signIn";

@Component({
    selector: 'aside-component',
    imports: [
        FormsModule,
        CommonModule,
    ],
    templateUrl: './aside.component.html',
    standalone: true,
    providers: [AuthStateLogin]
})
export class AsideComponent implements OnInit {
    @Input() menuOpen!:string;
    visible: boolean = true;
    firstNameUser:string = '';
    menus_list: Menu[] = [];

    constructor(
        private authState:AuthStateLogin,
        private router:Router
    ){}

    ngOnInit(){
        this.authState.user$.subscribe((res) => {
            if(res) {
                this.visible = false;
                // this.firstNameUser = res.user.firstname;
                this.menus_list = res.menus;
            }
            else this.router.navigate(['/'])
        });
    }
}