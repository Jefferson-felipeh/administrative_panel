import { Component, OnInit } from "@angular/core";
import { FindMenus } from "../../shared/services/findMenus.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CreateMenuComponent } from "./create-menu/create-menu.component";

@Component({
    selector: 'menus-component',
    imports: [
        CommonModule,
        FormsModule,
        CreateMenuComponent
    ],
    templateUrl: './menus.component.html',
    providers: [FindMenus],
    standalone: true
})
export class MenusComponent implements OnInit{
    getMenus!:any;
    obj_menu:{data:object} = {data: []}
    openModal:boolean = false;
    
    constructor(private findMenus:FindMenus){}

    ngOnInit(): void {
        this.findMenus.menus$.subscribe((res) => {
            if(res) this.getMenus = res;
            console.log(this.getMenus);
        })
    }

    openMenu = () => this.openModal = !this.openModal;
}