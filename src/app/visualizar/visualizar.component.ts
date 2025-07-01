import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent{

  constructor(
        private router: Router

      ) { }

      moveMenu() {
        this.router.navigate(["menu"])
      }

}
