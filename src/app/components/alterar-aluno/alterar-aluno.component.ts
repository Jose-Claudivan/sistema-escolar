import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/services/Aluno';
import { AlunoService } from 'src/app/services/aluno.service';
import { Router, ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-alterar-aluno',
  templateUrl: './alterar-aluno.component.html',
  styleUrls: ['./alterar-aluno.component.css']
})
export class AlterarAlunoComponent implements OnInit {

  aluno: Aluno = new Aluno();

  constructor(
    private alunoService: AlunoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const nome = this.getNome();
    this.alunoService.getStudentByName(nome).subscribe(
      data => {
        this.aluno = this.formatarData(data);
        console.log(this.aluno);
      }
    );
  }

  getNome(): string {
    return <string>this.activatedRoute.snapshot.paramMap.get('id');
  }

  formatarData(data: any): Aluno {
    return <Aluno>JSON.parse(data.contents)[0]
  }

  alterarAluno() {
    this.alunoService.updateStudent(this.aluno).subscribe(
      data => {
        console.log(data);
        alert("Aluno atualizado com sucesso!")
        this.router.navigate(["/aluno"]);
      }
    );
  }
}
