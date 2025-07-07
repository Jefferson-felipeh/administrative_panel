import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Menu } from "../../models/signIn";

@Injectable({providedIn: 'root'})
export class FindMenus{
    private userSubject = new BehaviorSubject<Menu | null>(null);
    menus$ = this.userSubject.asObservable();

    setMenus = (menus:Menu) => this.userSubject.next(menus);

    getMenu = (): object | null => {
        return this.userSubject.value;
    }

    clearMenu = () => this.userSubject.next(null);
}