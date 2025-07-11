import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginUserModel } from "../../models/signIn";

@Injectable({providedIn: 'root'})
export class HomeService {
    constructor(private httpClient:HttpClient){}

    getAll():Observable<LoginUserModel>{

        //Usando o withCredentials para passar os cookies do navegador na requisição para o backend_
        return this.httpClient.get<LoginUserModel>('http://localhost:3030/users/user-permissions',{withCredentials: true});
    }

    //https://api.coinbase.com/v2/prices/BTC-USD/spot
    //https://api.binance.com/api/v3/ticker/price?symbol=PEPEUSDT
}