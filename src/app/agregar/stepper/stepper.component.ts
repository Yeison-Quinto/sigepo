import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  msg: string;

  constructor() { }

  ngOnInit() {
  }

  alerta(i):void {
    var answer = confirm('¿Desea guardar el proyecto o agregar mas información ?');
    if(answer) {
            this.msg = 'Proyecto guardado';
    }
  }
  myValue;
}
