import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  burger: boolean = false;

  constructor(private route: Router) {}

  toggleBurgerMenu() {
    this.burger = !this.burger;
  }
  toCareer() {
    this.route.navigate(['/career']);
  }
}
