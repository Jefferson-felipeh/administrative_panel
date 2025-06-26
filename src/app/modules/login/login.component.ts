import { Component, OnInit } from "@angular/core";
import { LoginService } from "./login.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DataForm } from "../../models/dataFormLogin";

@Component({
    selector: 'login-component',
    imports: [
        CommonModule,
        FormsModule
    ],
    templateUrl: './login.component.html',
    standalone: true,
    providers: [LoginService]
})

export class LoginComponent implements OnInit{

    dataForm:DataForm = {
        email: '',
        password: ''
    };
    objErro!:string

    constructor(private loginService:LoginService){}

    ngOnInit(): void {}

    signIn (data:DataForm){
        const dataForm = this.loginService.signIn(data);

        const dt = dataForm.subscribe({
            next: (response) => {
                console.log(response);
            },
            error:(err) => {
                this.objErro = 'Credenciais inválidas';
                setTimeout(() => this.objErro = '', 5000);
            }
        })
    }
}