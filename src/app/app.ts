import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
