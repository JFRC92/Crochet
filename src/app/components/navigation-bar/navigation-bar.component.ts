import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  standalone: true,
  imports: [CommonModule,
    RouterModule
  ]
})
export class NavigationBarComponent {
isMenuOpen = false;

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}

closeMenu() {
  this.isMenuOpen = false;
}

  
  
}
