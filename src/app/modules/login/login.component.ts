import { Component } from "@angular/core";
import { LoginService } from "./login.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DataForm } from "../../models/dataFormLogin";
import { AuthStateLogin } from "../../shared/services/AuthStateLogin.service";
import { Router, RouterModule } from "@angular/router";

@Component({
    selector: 'login-component',
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    templateUrl: './login.component.html',
    standalone: true,
    providers: [
        LoginService,
        AuthStateLogin
    ]
})

export class LoginComponent{
    dataForm:DataForm = {email: '',password: ''};
    objErro!:string
    dataUserResponse!:any;

    constructor(
        private loginService:LoginService,
        private router:Router,
        private authState:AuthStateLogin
    ){}

    signIn (data:DataForm){
        const dataForm = this.loginService.signIn(data);

        dataForm.subscribe({
            next: (response) => {
                console.log(response);
                this.dataUserResponse = response;
                this.authState.setUser(this.dataUserResponse);
                this.router.navigate(['/home']);
            },
            error:(err) => {
                this.objErro = 'Credenciais inválidas';
                setTimeout(() => this.objErro = '', 5000);
            }
        });

        /*
            Após o usuário fazer login, o backend retornará os dados do usuário_
            Estou me escrevendo na observable e obtendo esses dados.
            Após o usuário fazer login, e os dados especificos desse usuário ser
            retornados do backend, eu preciso passar esses dados para o HomeComponent.
            Para isso, irei criar um service especifico para isso, que será o AuthStateLogin.
        */

    }
}