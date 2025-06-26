import { Component } from '@angular/core';
import { HomeComponent } from './modules/home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './modules/login/login.component';

@Component({
  selector: 'app-root',
  imports: [
    HomeComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
