import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent  {

  constructor(
      private router: Router

    ) { }

    moveMenu() {
      this.router.navigate(["menu"])
    }

}
