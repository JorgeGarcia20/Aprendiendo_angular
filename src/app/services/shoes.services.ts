import { Injectable } from '@angular/core';
import { Shoe } from '../models/shoe';

@Injectable()
export class shoeService {
  public shoes: Array<Shoe>;
  constructor() {
    this.shoes = [
      new Shoe('Rebook clasics', 'Reebook', 'blanco', 80, true),
      new Shoe('Nike air for one', 'nike', 'negro', 100, true),
      new Shoe('Nike runner', 'nike', 'negro', 70, true),
      new Shoe('Adidas Samba', 'Adidas', 'Negro', 120, false),
      new Shoe('Adidas defjam', 'Adidas', 'Negro', 200, true),
      new Shoe('Vans clasic', 'Vans', 'Negro', 70, true)
    ];
  }

  getText() {
    return 'Holla desde un servicio';
  }

  getShoes(): Array<Shoe> {
    return this.shoes;
  }
}
