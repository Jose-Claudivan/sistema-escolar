import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunoComponent } from './components/aluno/aluno.component';
import { CursoComponent } from './components/curso/curso.component';
import { MatriculaComponent } from './components/matricula/matricula.component';
import { AdicionarAlunoComponent } from './components/adicionar-aluno/adicionar-aluno.component';
import { AdicionarCursoComponent } from './components/adicionar-curso/adicionar-curso.component';
import { AlterarCursoComponent } from './components/alterar-curso/alterar-curso.component';
import { AlterarAlunoComponent } from './components/alterar-aluno/alterar-aluno.component';

const routes: Routes = [
  { path: 'aluno', component: AlunoComponent },
  { path: 'curso', component: CursoComponent },
  { path: 'matricula', component: MatriculaComponent },
  { path: 'aluno/adicionar', component: AdicionarAlunoComponent },
  { path: 'curso/adicionar', component: AdicionarCursoComponent },
  { path: 'curso/alterar/:id', component: AlterarCursoComponent },
  { path: 'aluno/alterar/:id', component: AlterarAlunoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
