import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-existencia-proyectos',
  templateUrl: './existencia-proyectos.component.html',
  styleUrls: ['./existencia-proyectos.component.css']
})
export class ExistenciaProyectosComponent implements OnInit {
  msg: string;
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
   
  employees = [
    {'name': 'Arango', tipo: 'Desarrollo', fechaI: "01-10-2018", fechaF:"06-10-2018", avance:'70%',},
    {'name': 'Arboleda', tipo: 'Arquitecturas', fechaI: "02-10-2018", fechaF:"06-10-2018", avance:'80%',},
    {'name': 'Sepulveda', tipo: 'Administrativo', fechaI: "04-10-2018", fechaF:"06-10-2018", avance:'95%',},
    {'name': 'Gonzalez', tipo: 'Test De Proyectos', fechaI: "03-10-2018", fechaF:"06-10-2018", avance:'90%',},
    {'name': 'Cañas', tipo: 'Aplicativos Web', fechaI: "04-10-2018", fechaF:"06-10-2018", avance:'75%',},
    {'name': 'Quinto', tipo: 'Auxiliar de Desarrollo', fechaI: "05-10-2018", fechaF:"06-10-2018", avance:'65%',},     
  ];
 
  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  addEmployee():void{
    this.employees.push(this.model);
    this.msg = 'Proyecto Agregado';
  }

  deleteEmployee(i):void {
    var answer = confirm('Estas seguro quiere eliminar el proyecto?');
    if(answer) {
      this.employees.splice(i, 1);
      this.msg = 'Proyecto Eliminado';
    }
  }
  myValue;


  editEmployee(i):void {
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.tipo = this.employees[i].tipo;
    this.model2.fechaI = this.employees[i].fechaI;
    this.model2.fechaF = this.employees[i].fechaF;
    this.model2.avance = this.employees[i].avance;
    this.myValue = i;
  }

  updateEmployee():void {
    let i = this.myValue;
    for(let j = 0; j < this.employees.length; j++){
      if(i == j) {
        this.employees[i] = this.model2;
        this.msg = 'Proyecto Actualizado';
        this.model2 = {};
      }
    }
  }

  closeAlert():void {
    this.msg = '';
  }




  
}
