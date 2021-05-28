import { CursoService } from './../../services/curso.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/services/Curso';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  cursos: Curso[] = [];
  cursoSelecionado: string = '';
  curso: Curso = {
    codigo: '',
    nome: '',
    instrutor: '',
    local: '',
    cargaHoraria: '',
    dataInicio: ''
  };

  constructor(
    private router: Router,
    private cursoService: CursoService
  ) { }

  ngOnInit(): void {
    this.cursoService.getAllCursos().subscribe(
      data => {
        this.cursos = this.formatData(data);
        console.log(this.cursos);
      }
    );
  }

  pesquisar(nomeCurso: string) {
    if (nomeCurso == '') {
      this.cursoService.getAllCursos().subscribe(
        data => {
          this.cursos = this.formatData(data);
          console.log(this.cursos);
        }
      );
    } else {
      this.cursoService.getCursoByName(nomeCurso).subscribe(
        data => {
          this.cursos = this.formatData(data);
        }
      );
    }
  }

  atribuirValor(nomeCurso: string) {
    this.cursoSelecionado = nomeCurso;
  }

  alterarCurso(nomeCurso: string) {
    this.router.navigate(["/curso/alterar/" + nomeCurso]);
    this.cursoService.getCursoByName(nomeCurso).subscribe(
      data => {
        this.cursos = this.formatData(data);
        console.log(this.cursos);
      }
    );
  }

  deletarCurso(nomeCurso: string) {
    if (nomeCurso == '') {
      alert("Selecione um curso para ser deletado!")
    } else {
      this.cursoService.deleteCurso(this.curso).subscribe(
        data => {
          console.log(data)
        }
      )
    }
  }

  formatData(data: any): Curso[] {
    return <Curso[]>JSON.parse(data.contents);
  }
}
