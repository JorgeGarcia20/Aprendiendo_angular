import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; //importacion necesaria para el uso de data binding
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
//new component
import { VideogamesComponent } from './videogames/videogame.component';
import { ShoesComponent } from './shoes/shoes.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { ExternoComponent } from './externo/externo.component';
import { CalculadoraPipe } from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    VideogamesComponent,
    ShoesComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
