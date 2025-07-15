import { Component, OnInit } from "@angular/core";
import { FindMenus } from "../../shared/services/findMenus.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CreateMenuComponent } from "./create-menu/create-menu.component";
import { Menu } from "../../models/menu";

@Component({
    selector: 'menus-component',
    imports: [
        CommonModule,
        FormsModule,
        CreateMenuComponent
    ],
    templateUrl: './menus.component.html',
    providers: [],
    standalone: true
})
export class MenusComponent implements OnInit{
    getMenus!:Menu[];
    obj_menu:{data:object} = {data: []}
    openModal:boolean = false;
    
    constructor(private findMenus:FindMenus){}

    ngOnInit(): void {
        this.findMenus.menus$.subscribe((res) => {
            if(res) this.getMenus = res;
        });
    }

    openMenu = () => this.openModal = !this.openModal;
}