import { Component, OnInit } from '@angular/core';
import { PacienteInfoService } from './paciente-info.service';
import { pacienteInfo } from './paciente-info';

@Component({
  selector: 'app-censo',
  templateUrl: './censo.component.html',
  styleUrls: ['./censo.component.scss']
})

export class CensoComponent implements OnInit {

  areas: string[] = [];
  pacientes: pacienteInfo[][];
  numPacientes: Number[] = [];

  panelOpenState: boolean = false;
  allExpandState = true;
  constructor(pacienteInfo: PacienteInfoService) {
    this.numPacientes.push(pacienteInfo.pacientes.length)
    this.areas = pacienteInfo.areas;
    this.pacientes = [];

    for (let i = 0; i < this.areas.length; i++)
      this.pacientes[i] = [];
    for (let i = 0; i < pacienteInfo.pacientes.length; i++) {
      for (let j = 0; j < this.areas.length; j++) {
        if (pacienteInfo.pacientes[i].area == this.areas[j]) {
          this.pacientes[j].push(pacienteInfo.pacientes[i]);
          break;
        }
      }
    }
    for (let i = 0; i < this.pacientes.length; i++) {
      this.numPacientes.push(this.pacientes[i].length);
    }
  }

  expand() {
    this.allExpandState = !this.allExpandState;
  }

  ngOnInit() {
  }
}
