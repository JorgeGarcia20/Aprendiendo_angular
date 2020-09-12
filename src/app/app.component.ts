import { Component } from '@angular/core';
import { Configuration } from './models/configuration';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'aprendiendo-angular';
  public description: string;
  public show_videogames: boolean = true;
  public config;

  constructor() {
    this.title = Configuration.titulo;
    this.description = Configuration.descripcion;
    this.config = Configuration;
  }

  hideVideogames(value) {
    this.show_videogames = value;
  }
}
