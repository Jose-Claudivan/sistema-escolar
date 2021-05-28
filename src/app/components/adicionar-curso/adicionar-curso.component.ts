import { CursoService } from './../../services/curso.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/services/Curso';


@Component({
  selector: 'app-adicionar-curso',
  templateUrl: './adicionar-curso.component.html',
  styleUrls: ['./adicionar-curso.component.css']
})
export class AdicionarCursoComponent implements OnInit {

  curso: Curso = {
    codigo: '',
    nome: '',
    instrutor: '',
    local: '',
    cargaHoraria: '',
    dataInicio: ''
  };

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
  }

  adicionar(nome: string, codigo: string, instrutor: string, local: string, cargaHoraria: string, dataInicio: string) { 
    this.curso = {
      nome: nome,
      codigo: codigo,
      instrutor: instrutor,
      local: local,
      cargaHoraria: cargaHoraria,
      dataInicio: dataInicio
    }
    //só para verificar qual o retorno do servidor
    this.cursoService.addCurso(this.curso).subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
