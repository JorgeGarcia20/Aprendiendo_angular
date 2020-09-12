import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit, DoCheck {
  public title = "I'm taking two courses, they are";
  constructor() {
    //console.log('Cursos component is working!');
  }

  ngOnInit(): void {
  }

  ngDoCheck() {

  }

}
