import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LoginUserModel } from "../../models/signIn";


@Injectable({providedIn: 'root'})
export class AuthStateLogin{
    private userSubject = new BehaviorSubject<LoginUserModel | null>(null);
    user$ = this.userSubject.asObservable();

    constructor(){
        const saveStorage = localStorage.getItem('user');//Criar um registro no locastorage;
        if(saveStorage) this.userSubject.next(JSON.parse(saveStorage));
    }

    setUser(user:LoginUserModel){
        localStorage.setItem('user',JSON.stringify(user));//Salva os dados nesse registro;
        this.userSubject.next(user);
    }

    getUser(): object | null{
        return this.userSubject.value;
    }

    clearuser(){
        localStorage.removeItem('user');//Apaga os dados do localstorage referente a esse registro;
        this.userSubject.next(null);
    }
}