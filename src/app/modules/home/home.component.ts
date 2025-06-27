import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { AuthStateLogin } from "../../shared/services/AuthStateLogin.service";

@Component({
    selector: 'home-component',
    imports: [
        FormsModule,
        CommonModule,
        RouterLink,
    ],
    templateUrl: './home.component.html',
    standalone: true,
    providers: [AuthStateLogin]
})
export class HomeComponent implements OnInit {
    visible: boolean = true;
    firstNameUser:string = '';
    menus = [];

    constructor(
        private authState:AuthStateLogin,
        private router:Router
    ){}

    ngOnInit(){
        this.authState.user$.subscribe((res) => {
            if(res) {
                console.log(res);
                this.visible = false;
                this.firstNameUser = res.user.firstname;
                res.permissions.forEach(e => this.menus.push(e));
                
                
            }
            else this.router.navigate(['/'])
        });
    }

    signUp = () => this.authState.clearuser();
}