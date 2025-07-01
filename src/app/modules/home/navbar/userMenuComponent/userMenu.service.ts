import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Menu } from "../../../../models/signIn";
import { ProfileListInterface } from "../../../../models/profileList";

@Injectable({providedIn: 'root'})
export class UserMenuService{

    constructor(private httpClient:HttpClient){}

    getProfiles():Observable<ProfileListInterface[]>{
        return this.httpClient.get<ProfileListInterface[]>('http://localhost:3032/personal/list');
    }

    getMenus():Observable<Menu>{
        return this.httpClient.get<Menu>('http://localhost:3032/menu/list');
    }
}