import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'personal-component',
    imports:[CommonModule,FormsModule],
    templateUrl: './personal.component.html',
    standalone:true
})
export class PersonalComponent{
    @Output() dt_inputs = new EventEmitter<any>();
    @Input() return_data!:{
        nome:string,
        sobrenome:string
        cep:string
        dt_nasc:string
    };
    data_user = {
        nome:this.return_data?.nome,
        sobrenome:'',
        cep:'',
        dt_nasc:''
    }

    ob_data = () => this.dt_inputs.emit(this.data_user);
    
}