import { Component, OnInit } from '@angular/core';
import { PeticionesServices } from '../services/peticiones.services';

@Component({
  selector: 'externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesServices]
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId: any;

  constructor(
    private _peticionesServices: PeticionesServices
  ) {
    this.userId = 1;
  }

  ngOnInit(): void {
    this.cargaUsuario()
  }
  cargaUsuario() {
    this._peticionesServices.getUser(this.userId).subscribe(
      result => {
        this.user = result.data;
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}


