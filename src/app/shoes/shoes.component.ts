import { Component, OnInit } from '@angular/core';
import { Shoe } from '../models/shoe';
import { shoeService } from '../services/shoes.services'

@Component({
  selector: 'shoes',
  templateUrl: './shoes.component.html',
  providers: [shoeService]
})

export class ShoesComponent implements OnInit {
  public title = 'These are my favorite shoe brands';
  public shoes: Array<Shoe>;
  public marcas: String[];
  public color: string;
  public mi_marca: string;

  constructor(
    private _shoeService: shoeService
  ) {
    this.color = 'yellow';
    this.marcas = new Array;
    //console.log('Shoes component is working!')
  }

  ngOnInit() {
    this.shoes = this._shoeService.getShoes();
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

  borrarMarca(index) {
    this.marcas.splice(index, 1);
  }

  onBlur() {
    console.log('Has salido del input');
  }

  getTecla() {
    alert(this.mi_marca);
  }

}