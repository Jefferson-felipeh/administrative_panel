import { CommonModule } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PersonalComponent } from "./personal/personal.component";
import { ConfirmRegisterComponent } from "./confirmRegister/confirmRegister.component";

@Component({
    selector: 'register-component',
    imports: [
        CommonModule,
        FormsModule,
        PersonalComponent,
        ConfirmRegisterComponent
    ],
    templateUrl: './register.component.html',
    standalone: true
})
export class RegisterComponent implements OnInit {
    @ViewChild(PersonalComponent) personalComponent!:PersonalComponent;
    step: number = 1;
    nextButton: string = 'Próximo';
    justifyField: string = 'justify-start';
    isFormOnRight = false;
    return_step:any;

    ngOnInit(): void { }

    next_step() {
        this.step++;
        this.isFormOnRight = !this.isFormOnRight;
        this.nextButton = 'Cadastrar';
        this.justifyField = 'justify-end';
        this.personalComponent.ob_data();
    }

    back_step() {
        this.step--;
        this.isFormOnRight = !this.isFormOnRight;
        this.nextButton = 'Próximo';
        this.justifyField = 'justify-start';
        this.return_step = JSON.parse(localStorage.getItem('dados_user') || '{}');
    }

    get formPositionClass(): string {
        return this.isFormOnRight ? 'translate-x-full' : 'translate-x-0';
    }

    data_user(data:any){
        localStorage.setItem('dados_user', JSON.stringify(data));
    }
}