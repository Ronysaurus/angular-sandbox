import { Injectable } from '@angular/core';
import { pacienteInfo } from './paciente-info';

@Injectable({
  providedIn: 'root'
})

export class PacienteInfoService {

  pacientes: pacienteInfo[] = [];
  areas: string[] = [];

  GetInfo() {
    //agregar los pacientes a la lista desde la base de datos 
  }

  AddPaciente(paciente: pacienteInfo) {
    this.pacientes.push(paciente);
    if (!this.areas.includes(paciente.area)) {
      this.areas.push(paciente.area);
    }
  }

  getPacientes() {
    return this.pacientes;
  }

  //borrar esto en la vida real
  myPaciente1: pacienteInfo;
  myPaciente2: pacienteInfo;
  myPaciente3: pacienteInfo;

  constructor() {

    //borrar esto en la vida real
    this.myPaciente1 = new pacienteInfo;
    this.myPaciente1.area = "area1";
    this.myPaciente1.edad = 23;
    this.myPaciente1.fullname = "El Chamoy";
    this.myPaciente1.estancia = "toda la vida";
    this.myPaciente1.habitacion = "al lado de la mia";
    this.myPaciente1.ingreso = "ayer";
    this.myPaciente1.medico = "el doc";
    this.myPaciente1.motivo = "se murio por borracho";
    this.myPaciente1.nacimiento = "no me quiere decir";
    this.myPaciente1.servicioMedico = "no tiene";
    this.myPaciente1.ubicacion = "aqui";
    this.myPaciente1.id = 666;
    this.AddPaciente(this.myPaciente1);

    this.myPaciente2 = new pacienteInfo;
    this.myPaciente2.area = "area1";
    this.myPaciente2.edad = 22;
    this.myPaciente2.fullname = "El Barbachas";
    this.myPaciente2.estancia = "un ratito";
    this.myPaciente2.habitacion = "la wena";
    this.myPaciente2.ingreso = "ayer";
    this.myPaciente2.medico = "el doc";
    this.myPaciente2.motivo = "ta muy wapo";
    this.myPaciente2.nacimiento = "30/12/1996";
    this.myPaciente2.servicioMedico = "si";
    this.myPaciente2.ubicacion = "ahi";
    this.myPaciente2.id = 123;
    this.AddPaciente(this.myPaciente2);

    this.myPaciente3 = new pacienteInfo;
    this.myPaciente3.area = "area2";
    this.myPaciente3.edad = 23;
    this.myPaciente3.fullname = "El alfa";
    this.myPaciente3.estancia = "mucho";
    this.myPaciente3.habitacion = "la otra";
    this.myPaciente3.ingreso = "nunca";
    this.myPaciente3.medico = "el doc";
    this.myPaciente3.motivo = "exploto";
    this.myPaciente3.nacimiento = "io ke se";
    this.myPaciente3.servicioMedico = "ño";
    this.myPaciente3.ubicacion = "ahi";
    this.myPaciente3.id = 231;
    this.AddPaciente(this.myPaciente3);
    //hasta aqui
  }

}
