import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { UserMenuComponent } from "./userMenuComponent/userMenu.component";
import { LoginUserModel } from "../../../models/signIn";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'navbar-component',
    imports: [
        CommonModule,
        FormsModule,
        UserMenuComponent,
    ],
    templateUrl: './navbar.component.html',
    standalone: true

})
export class NavBarComponent implements OnInit{
    @Input() data_permissions!:LoginUserModel;
    @Output() openMenu = new EventEmitter<boolean>();

    ngOnInit(): void {}

    openMenuAside:boolean = false;
    openMore:boolean = false;

    ActMenu = () => {
        this.openMenuAside = !this.openMenuAside;
        this.openMenu.emit(this.openMenuAside);
    }
    more = () => this.openMore = !this.openMore;
}