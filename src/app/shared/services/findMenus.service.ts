import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Menu } from "../../models/signIn";


@Injectable({providedIn: 'root'})
export class FindMenus{
    private userSubject = new BehaviorSubject<Menu | null>(null);
    menus$ = this.userSubject.asObservable();

    constructor(){
        // const saveStorage = localStorage.getItem('menus');//Criar um registro no locastorage;
        // if(saveStorage) this.userSubject.next(JSON.parse(saveStorage));
    }

    setMenus(menus:Menu){
        // localStorage.setItem('menus',JSON.stringify(menus));//Salva os dados nesse registro;
        this.userSubject.next(menus);
    }

    getMenu(): object | null{
        return this.userSubject.value;
    }

    clearMenu(){
        // localStorage.removeItem('menus');//Apaga os dados do localstorage referente a esse registro;
        this.userSubject.next(null);
    }
}