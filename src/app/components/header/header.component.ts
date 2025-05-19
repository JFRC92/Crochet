import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-header',
  imports: [ CommonModule,
    NavigationBarComponent
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
