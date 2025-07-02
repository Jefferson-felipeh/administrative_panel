import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Menu } from "../../../models/signIn";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class CreateMenuService{

    constructor(private httpClient:HttpClient){}

    createMenu(dataMenu:Partial<Menu>):Observable<Menu>{
        return this.httpClient.post<Menu>('http://localhost:3032/menu/create',dataMenu);
    }
}