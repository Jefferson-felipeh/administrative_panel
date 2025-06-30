import { Component, Input } from "@angular/core";
import { UserMenuComponent } from "./userMenuComponent/userMenu.component";
import { AsideComponent } from "../aside/aside.component";

@Component({
    selector: 'navbar-component',
    imports: [
        UserMenuComponent,
        AsideComponent
    ],
    templateUrl: './navbar.component.html',
    standalone: true

})
export class NavBarComponent{
    @Input() firstNameUser:string = '';
}