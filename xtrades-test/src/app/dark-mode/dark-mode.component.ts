import { Component } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css']
})
export class DarkModeComponent {
  burger: boolean = false;

  toggleBurgerMenu() {
    this.burger = !this.burger;
  }
}
