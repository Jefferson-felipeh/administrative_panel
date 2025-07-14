import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CreateMenuService } from "./create-menu.service";
import { Router } from "@angular/router";
import { Menu } from "../../../models/menu";

@Component({
    selector: 'create-menu-component',
    templateUrl: './create-menu.component.html',
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [CreateMenuService],
    standalone: true
})
export class CreateMenuComponent implements OnInit{
    @Input() obj_menu!:object;
    @Output() close_menu = new EventEmitter<boolean>();

    dataMenu:Partial<Menu> = {
        label: '',
        path: '',
        icon: '',
        permission: ''
    };

    constructor(
        private createMenuService:CreateMenuService,
        private router:Router
    ){}

    ngOnInit(): void {}

    closeMenu = () => this.close_menu.emit(false);

    createMenu(){
        const createMenu = this.createMenuService.createMenu(this.dataMenu);

        createMenu.subscribe({
            next: (res => {
                console.log(res);
                this.router.navigate(['menus']);
            }),
            error: (error => {
                console.log(error);
            })
        });
    }
}