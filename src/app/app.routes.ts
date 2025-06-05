import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PatronesComponent } from './components/patrones/patrones.component';
import { DisenoComponent } from './components/diseno/diseno.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'patrones', loadComponent: () => import('./components/patrones/patrones.component').then(m => m.PatronesComponent) },
  { path: 'diseno', component: DisenoComponent},
  /*{ path: '**', redirectTo: '' },*/

  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];
