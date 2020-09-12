import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'videogames',
  templateUrl: './videogame.component.html'
})

export class VideogamesComponent implements OnInit, DoCheck {
  public title: string = 'My favorite Videogames'

  constructor() {
    console.log('Videogames components is working!')
  }

  ngOnInit() {
    console.log('Metodo OnInit -> Este metodo se ejecuta al inicar el componente')
  }

  //este metodo se ejecutara cuando se produzca un cambio en la aplicacion
  ngDoCheck() {
    console.log('Evento DoCheck ejecutado');
  }

  ngOnDestroy() {
    console.log('OnDestroy ejecutado');
  }

  cambiarTitulo() {
    this.title = 'Nuevo titulo del componente';
  }
} 