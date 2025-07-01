import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent{

  constructor(
        private router: Router

      ) { }

      moveMenu() {
        this.router.navigate(["menu"])
      }

}
