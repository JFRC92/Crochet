import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-img.component.html',
  styleUrl: './scroll-img.component.css'
})
export class ScrollImgComponent implements OnInit {
  images = [
    { src: '/images/madrid/equipo.jpg', alt: 'Equipo crochet at trois' },
    { src: '/images/madrid/equipo1.jpg', alt: 'Equipo de crochet luciendo chaleco loopy' },
    { src: '/images/madrid/mariapose.jpg', alt: 'Maria con top de crochet at trois' },
    { src: '/images/madrid/aranza.jpg', alt: 'Aranza con top de crochet at trois' },
    { src: '/images/Loopy1.jpg', alt: 'Alfonso luciendo camisa de crochet at trois' },
    { src: '/images/bebe.jpg', alt: 'Conjunto zapatos y diadema bebe' },
    { src: '/images/beaferia.jpg', alt: 'Manto de feria' },
    { src: '/images/zapas.jpg', alt: 'Zapatillas bebe' },
    { src: '/images/8m.jpg', alt: 'Cristina representando el 8m con su top' }
  ];

  imagesAll: { src: string; alt: string }[] = [];
  selectedImage: { src: string; alt: string } | null = null;

  isPaused = false;
  translateX = 0;

  ngOnInit(): void {
    // Imagenes repetidas para el loop del carrusel
    this.imagesAll = [...this.images, ...this.images];
  }

  openModal(image: { src: string; alt: string }) {
    this.selectedImage = image;
  }

  closeModal(event?: MouseEvent) {
    if (event) event.stopPropagation();
    this.selectedImage = null;
  }

  pause() {
    this.isPaused = true;
  }

  resume() {
    this.isPaused = false;
  }

  nextSlide() {
    this.translateX -= 100 / this.images.length;
    if (Math.abs(this.translateX) >= 100) {
      this.translateX = 0;
    }
  }

  prevSlide() {
    this.translateX += 100 / this.images.length;
    if (this.translateX > 0) {
      this.translateX = -100 + (100 / this.images.length);
    }
  }
}

