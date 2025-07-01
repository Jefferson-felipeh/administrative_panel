import { Component, Input, OnInit } from "@angular/core";
import { UserMenuComponent } from "./userMenuComponent/userMenu.component";
import { AsideComponent } from "../aside/aside.component";
import { LoginUserModel } from "../../../models/signIn";

@Component({
    selector: 'navbar-component',
    imports: [
        UserMenuComponent,
        AsideComponent
    ],
    templateUrl: './navbar.component.html',
    standalone: true

})
export class NavBarComponent implements OnInit{
    @Input() data_permissions!:LoginUserModel;

    ngOnInit(): void {
        // console.log(this.data_permissions);
    }
}