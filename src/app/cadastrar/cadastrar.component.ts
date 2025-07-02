import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})


export class CadastrarComponent implements OnInit {

  cliente = {
    nome: '',
    email: '',
    telefone: '',
    prioridade: false
  };

  listaClientes: any[] = [];

  mensagemSucesso: string = '';
  mensagemErro: string = '';

  constructor(
    private router: Router

  ) { }

  ngOnInit(): void {
    const dados = localStorage.getItem('clientes');
    if (dados) {
      this.listaClientes = JSON.parse(dados);
    }
  }

  moveMenu() {
    this.router.navigate(["menu"])
  }

  salvar(): void {

    if (!this.cliente.nome || !this.cliente.email || !this.cliente.telefone) {

      this.mensagemErro = 'Preencha todos os campos!';

      setTimeout(() => {
        this.mensagemErro = '';
      }, 3000);
      return;
    }

    this.listaClientes.push({ ...this.cliente });

    localStorage.setItem('clientes', JSON.stringify(this.listaClientes));

    this.mensagemSucesso = 'Cliente salvo com sucesso!';


    setTimeout(() => {
      this.mensagemSucesso = '';
    }, 3000);

    this.cliente = {
      nome: '',
      email: '',
      telefone: '',
      prioridade: false
    };
  }

}
