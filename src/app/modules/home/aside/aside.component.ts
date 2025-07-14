import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Menu } from "../../../models/menu";

@Component({
    selector: 'aside-component',
    imports: [
        FormsModule,
        CommonModule,
    ],
    templateUrl: './aside.component.html',
    standalone: true,
    providers: []
})
export class AsideComponent implements OnInit {
    @Input() menus_list: Menu[] = [];
    @Input() showAside!: boolean;
    visible: boolean = true;
    firstNameUser:string = '';

    constructor(){}

    ngOnInit(){}
}