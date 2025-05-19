import { Component } from '@angular/core';
// TODO: Update the path below to the correct relative path where header.component.ts exists
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { FeaturedComponent } from '../featured/featured.component';
import { ScrollImgComponent } from '../scroll-img/scroll-img.component';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-inicio',
  imports: [
    RouterModule,
    LogoComponent,
    HeaderComponent,
    FooterComponent,
    NavigationBarComponent,
    FeaturedComponent,
    ScrollImgComponent
    
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
     title = 'crochet';

   images = [
     { src: 'public/images/madrid/equipo.jpg', alt: 'Equipo crochet at trois' },
     { src: 'public/images/madrid/equipo1.jpg', alt: 'Equipo de crochet lucienod chaleco loopy' },
     { src: 'public/images/madrid/mariapose.jpg', alt: 'Maria con top de crochet at trois' },
     { src: 'public/images/madrid/aranza.jpg', alt: 'Aranza con top de crochet at trois' }
   ];

   currentIndex: number = 0;

   prevSlide(): void {
     if (this.currentIndex > 0) this.currentIndex--;
   }

   nextSlide(): void {
     if (this.currentIndex < this.images.length - 1) this.currentIndex++;
   }

} 
