import { Component, OnInit } from "@angular/core";
import { Menu } from "../../models/signIn";
import { FindMenus } from "../../shared/services/findMenus.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'menus-component',
    imports: [CommonModule,FormsModule],
    templateUrl: './menus.component.html',
    providers: [FindMenus],
    standalone: true
})
export class MenusComponent implements OnInit{
    getMenus!:any;

    constructor(private findMenus:FindMenus){}

    ngOnInit(): void {
        this.findMenus.menus$.subscribe((res) => {
            if(res) this.getMenus = res;
            console.log(this.getMenus);
        })
    }
}