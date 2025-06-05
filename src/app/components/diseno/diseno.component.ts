import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { LogoComponent } from '../logo/logo.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-diseno',
  
  imports: [
    RouterModule,
    LogoComponent,
    NavigationBarComponent,
    FooterComponent,
    
  ],

  standalone: true,
  templateUrl: './diseno.component.html',
  styleUrls: ['./diseno.component.css']
})
export class DisenoComponent {
  Disenos = [

  ]

}
