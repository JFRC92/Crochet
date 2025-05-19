import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-patrones',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './patrones.component.html',
  styleUrls: ['./patrones.component.css']
})
export class PatronesComponent {
  Patrones = [
    { img: 'images/chal/Chal.jpg'},
    { img: 'images/chal/Chal.jpg'}


  ];

}
