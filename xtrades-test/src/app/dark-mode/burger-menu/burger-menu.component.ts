import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.css']
})
export class BurgerMenuComponent {
  @Output() closedBurger: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private route: Router) {}
  toHome() {
    this.closedBurger.emit(true);
    this.route.navigate(['/home']);
  }
  toCareer() {
    this.closedBurger.emit(true);
    this.route.navigate(['/career']);
  }
}
