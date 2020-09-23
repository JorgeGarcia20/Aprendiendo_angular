import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public usuario: ContactoUsuario;
  public data;

  constructor() {
    this.usuario = new ContactoUsuario('', '', '', '');

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.data = this.usuario;
    //console.log('Evento submit lanzado')
    console.log(this.data);
  }

}
