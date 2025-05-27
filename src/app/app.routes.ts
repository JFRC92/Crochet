import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PatronesComponent } from './components/patrones/patrones.component';
import { DisenoComponent } from './components/diseno/diseno.component';


export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'patrones', component: PatronesComponent },
  { path: 'diseno', component: DisenoComponent},
  { path: '**', redirectTo: '' }
];
