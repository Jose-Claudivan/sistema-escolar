import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AlunoComponent } from './components/aluno/aluno.component';
import { CursoComponent } from './components/curso/curso.component';
import { MatriculaComponent } from './components/matricula/matricula.component';
import { AdicionarAlunoComponent } from './components/adicionar-aluno/adicionar-aluno.component';
import { AdicionarCursoComponent } from './components/adicionar-curso/adicionar-curso.component';
import { CursoService } from './services/curso.service';
import { AlterarCursoComponent } from './components/alterar-curso/alterar-curso.component';
import { AlunoService } from './services/aluno.service';
import { AlterarAlunoComponent } from './components/alterar-aluno/alterar-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    AlunoComponent,
    CursoComponent,
    MatriculaComponent,
    AdicionarAlunoComponent,
    AdicionarCursoComponent,
    AlterarCursoComponent,
    AlterarAlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CursoService,
    AlunoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
