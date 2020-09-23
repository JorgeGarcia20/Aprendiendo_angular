//aportar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes
import { VideogamesComponent } from './videogames/videogame.component';
import { ShoesComponent } from './shoes/shoes.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { Route } from '@angular/compiler/src/core';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';

//Array de rutas
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shoes', component: ShoesComponent },
  { path: 'videogames', component: VideogamesComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/:nombre/:followers', component: CursosComponent },
  { path: 'externo', component: ExternoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component: HomeComponent }
];


//Exportar el modulo router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);
