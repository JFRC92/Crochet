import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PatronesComponent } from './components/patrones/patrones.component';
import { DisenoComponent } from './components/diseno/diseno.component';
import { ContactserviceComponent } from './components/contactservice/contactservice.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { UserIconComponent } from './shared/user-icon/user-icon.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'patrones', loadComponent: () => import('./components/patrones/patrones.component').then(m => m.PatronesComponent) },
  { path: 'diseno', component: DisenoComponent},
  { path: 'contactservice', component: ContactserviceComponent },
  { path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent) },
  /*{ path: '**', redirectTo: '' },*/

  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];
