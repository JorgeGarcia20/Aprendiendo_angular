export class Shoe {
  //forma larga
  /*
    public nombre: string;
    public marca: string;
    public color: string;
    public precio: number;
    public stok: boolean;
  
    constructor(nombre, marca, color, precio, stok){
      this.nombre = nombre;
      this.marca = marca;
      this.color = color;
      this.precio = precio;
      this.stok = stok;
    }
    */
  //Forma corta
  constructor(
    public nombre: string,
    public marca: string,
    public color: string,
    public precio: number,
    public stok: boolean
  ) { }


}
