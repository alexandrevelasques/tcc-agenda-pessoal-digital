import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent implements OnInit {

  clientes: any[] = [];
  listaAgendamento: any[] = [];

  mensagemSucesso: string = '';
  mensagemErro: string = '';

  clienteSelecionado: number | null = null;
  descricao: string = '';
  data: string = '';
  horario: string = '';

  agendamento = {
    nome: '',
    email: '',
    telefone: '',
    prioridade: false
  };

  constructor(
        private router: Router

      ) { }

  ngOnInit(): void {
    const dados = localStorage.getItem('clientes');
    if (dados) {
      this.clientes = JSON.parse(dados);
    }

    const agendamentos = localStorage.getItem('agendamentos');
    if (agendamentos) {
      this.listaAgendamento = JSON.parse(agendamentos);
    }

  }

  moveMenu() {
        this.router.navigate(["menu"])
  }

  formatarData(dataISO: string): string {
    const partes = dataISO.split('-');
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  }

  salvarAgendamento(): void {

    if (!this.clienteSelecionado || !this.descricao || !this.data || !this.horario) {

      this.mensagemErro = 'Preencha todos os campos!';

      setTimeout(() => {
        this.mensagemErro = '';
      }, 3000);
      return;
    }

    const cliente = this.clientes[Number(this.clienteSelecionado)];

    const novoAgendamento = {
      nome: cliente.nome,
      email: cliente.email,
      telefone: cliente.telefone,
      prioridade: cliente.prioridade,
      descricao: this.descricao,
      data: this.formatarData(this.data),
      horario: this.horario + "h"
    };

    this.listaAgendamento.push(novoAgendamento);

    localStorage.setItem('agendamentos', JSON.stringify(this.listaAgendamento));

    this.mensagemSucesso = 'Agendamento salvo com sucesso!';

    setTimeout(() => {
      this.mensagemSucesso = '';
    }, 3000);

    this.clienteSelecionado = null;
    this.descricao = '';
    this.data = '';
    this.horario = '';
  }

}

