import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { AgendarComponent } from './agendar/agendar.component';
import { VisualizarComponent } from './visualizar/visualizar.component';

const routes: Routes = [
  {path: "menu", component: MenuComponent},
  {path: "cadastrar", component: CadastrarComponent},
  {path: "agendar", component: AgendarComponent},
  {path: "visualizar", component: VisualizarComponent},
  {path: "", redirectTo: "menu", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
