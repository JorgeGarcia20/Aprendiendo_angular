//aportar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes
import { VideogamesComponent } from './videogames/videogame.component';
import { ShoesComponent } from './shoes/shoes.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';

//Array de rutas
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Shoes', component: ShoesComponent },
  { path: 'Videogames', component: VideogamesComponent },
  { path: 'Cursos', component: CursosComponent },
  { path: '**', component: HomeComponent }
];


//Exportar el modulo router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);
