import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FindUserService } from "../../shared/services/findUser.service";
import { UserModel } from "../../models/user";

@Component({
    selector: 'profile-component',
    templateUrl: 'profile.component.html',
    imports: [CommonModule,FormsModule],
    providers: [],
    standalone: true
})
export class ProfileComponent implements OnInit{
    dataUserProfile!:UserModel;

    constructor(private findUserService:FindUserService){}

    ngOnInit(): void {
        this.findUserService.profile$.subscribe((res) => {
            if(res) this.dataUserProfile = res;
        });
    }
}