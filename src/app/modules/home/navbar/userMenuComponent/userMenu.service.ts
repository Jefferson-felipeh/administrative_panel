import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { ProfileListInterface } from "../../../../models/profileList";
import { UserModel } from "../../../../models/user";
import { Menu } from "../../../../models/menu";

@Injectable({providedIn: 'root'})
export class UserMenuService{

    constructor(private httpClient:HttpClient){}

    getProfiles():Observable<ProfileListInterface[]>{
        return this.httpClient.get<ProfileListInterface[]>('http://localhost:3032/personal/list');
    }

    getMenus():Observable<Menu>{
        return this.httpClient.get<Menu>('http://localhost:3032/menu/list');
    }

    getUser(id:string):Observable<UserModel>{
        return this.httpClient.get<UserModel>(`http://localhost:3030/users/getOne/${id}`);
    }
}