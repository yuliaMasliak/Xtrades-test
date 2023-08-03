import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {
  burger: boolean = false;
  details: string = 'active';

  constructor(private route: Router) {}

  toggleBurgerMenu() {
    this.burger = !this.burger;
  }
  toCareer() {
    this.route.navigate(['/home']);
  }
  toggleDetails() {
    this.details = this.details === 'hidden' ? 'active' : 'hidden';
  }
  handleBurgerClose(value: boolean) {
    this.burger = !value;
  }
}
