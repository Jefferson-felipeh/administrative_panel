import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
    selector: 'home-component',
    imports: [
        FormsModule,
        CommonModule,
        RouterOutlet,
        RouterLink,
    ],
    templateUrl: './home.component.html',
    standalone: true
})
export class HomeComponent implements OnInit{
    visible:boolean = true;

    ngOnInit(): void {
        console.log('HomeComponent')
    }
}