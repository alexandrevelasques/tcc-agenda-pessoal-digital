import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent implements OnInit{

  agendamentos: any[] = [];

  constructor(
        private router: Router

      ) { }

  ngOnInit(): void {
    const dadosAgendamentos = localStorage.getItem('agendamentos');
    if (dadosAgendamentos) {
      this.agendamentos = JSON.parse(dadosAgendamentos);
    }
  }

  moveMenu() {
      this.router.navigate(["menu"])
  }

}
