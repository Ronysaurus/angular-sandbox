import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-censo',
  templateUrl: './censo.component.html',
  styleUrls: ['./censo.component.scss']
})

export class CensoComponent implements OnInit {

  panelOpenState: boolean = false;
  allExpandState = true;
  constructor() { }

  expand()
  {
    this.allExpandState = !this.allExpandState;
  }

  ngOnInit() {
  }
}
