import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoComponent } from "../logo/logo.component";
import { NavigationBarComponent } from "../navigation-bar/navigation-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patrones',
  imports: [
    RouterModule,
    LogoComponent,
    NavigationBarComponent,
    FooterComponent
   
],
  standalone: true,
  templateUrl: './patrones.component.html',
  styleUrls: ['./patrones.component.css']
})
export class PatronesComponent {
  patrones = [
       {
      nombre: 'Patrón 1',
      imagen: 'images/madrid/cris.png',
      link: '/patrones/patron-1'
    },
    {
      nombre: 'Patrón 2',
      imagen: 'assets/patron2.jpg',
      link: '/patrones/patron-2'
    }
    // Agrega más patrones aquí
  ];


  

}
