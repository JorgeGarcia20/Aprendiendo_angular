import { Component, OnInit } from '@angular/core';
//import { ɵSharedStylesHost } from '@angular/platform-browser';
import { Shoe } from '../models/shoe';

@Component({
  selector: 'shoes',
  templateUrl: './shoes.component.html'
})

export class ShoesComponent implements OnInit {
  public title = 'These are my favorite shoe brands';
  public shoes: Array<Shoe>;
  public marcas: String[];
  public color: string;
  public mi_marca: string;

  constructor() {
    this.color = 'yellow';
    this.marcas = new Array;
    this.shoes = [
      new Shoe('Rebook clasics', 'Reebook', 'blanco', 80, true),
      new Shoe('Nike air for one', 'nike', 'negro', 100, true),
      new Shoe('Nike runner', 'nike', 'negro', 70, true),
      new Shoe('Adidas Samba', 'Adidas', 'Negro', 120, false),
      new Shoe('Adidas defjam', 'Adidas', 'Negro', 200, true),
      new Shoe('Vans clasic', 'Vans', 'Negro', 70, true)
    ];

    //console.log('Shoes component is working!')
  }

  ngOnInit() {
    console.log(this.shoes);
    this.getMarcas();
  }

  getMarcas() {
    this.shoes.forEach((shoe, index) => {
      //si existe una marca repetida no la mostrara
      if (this.marcas.indexOf(shoe.marca) < 0) {
        this.marcas.push(shoe.marca);
      }
    });
    console.log(this.marcas);
  }

  //metodos de ejemplo para usar el data binding
  getMarca() {
    alert(this.mi_marca);
  }

  addMarca() {
    this.marcas.push(this.mi_marca);
  }

}