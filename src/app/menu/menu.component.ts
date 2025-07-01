import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(
    private router: Router

  ) { }

  moveCadastrar() {
    this.router.navigate(["cadastrar"])
  }

  moveAgendar() {
    this.router.navigate(["agendar"])
  }

  moveVisualizar() {
    this.router.navigate(["visualizar"])
  }

}
