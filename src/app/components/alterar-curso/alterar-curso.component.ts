import { Curso } from 'src/app/services/Curso';
import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alterar-curso',
  templateUrl: './alterar-curso.component.html',
  styleUrls: ['./alterar-curso.component.css']
})
export class AlterarCursoComponent implements OnInit {

  curso: Curso = {
    codigo: '',
    nome: '',
    instrutor: '',
    local: '',
    cargaHoraria: '',
    dataInicio: ''
  };

  constructor(
    private cursoService: CursoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const nome = this.getNome();
    this.cursoService.getCursoByName(nome).subscribe(
      data => {
        this.curso = this.formatarData(data);
        console.log(this.formatarData(data));
      }
    )
  }

  getNome(): string {
    return <string>this.route.snapshot.paramMap.get('id') ;
  }

  formatarData(data: any): Curso {
    return <Curso>JSON.parse(data.contents)[0]
  }

  alterarCurso() {
    this.cursoService.updateCurso(this.curso).subscribe(
      data => {
        this.curso = this.formatarData(data);
        console.log(data);
        this.router.navigate(['/curso'])
      }
    );
  }

}
