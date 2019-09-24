import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-censo',
  templateUrl: './censo.component.html',
  styleUrls: ['./censo.component.scss']
})

export class CensoComponent implements OnInit {

  areas = ['Area1', 'Area2', 'Area3'];
  pacientes: string[][] = [["paciente1", "paciente2"], ["paciente3"], ["paciente4", "paciente5", "paciente6"]];
  panelOpenState: boolean = false;
  allExpandState = true;
  constructor() { }

  expand() {
    this.allExpandState = !this.allExpandState;
  }

  ngOnInit() {
  }
}
