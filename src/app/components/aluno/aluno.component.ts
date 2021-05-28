import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/services/Aluno';
import { AlunoService } from 'src/app/services/aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunos: Aluno[] = [];
  alunoSelecionado: string = '';
  aluno: Aluno = new Aluno();

  constructor(
    private alunoService: AlunoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.alunoService.getAllStudents().subscribe(
      data => {
        console.log(data)
        this.alunos = this.formatarData(data);
      }
    );
  }

  pesquisarAluno(nomeAluno: string) {
    if (nomeAluno == '') {
      this.alunoService.getAllStudents().subscribe(
        data => {
          this.alunos = this.formatarData(data);
          console.log(this.alunos);
        }
      );
    } else {
      this.alunoService.getStudentByName(nomeAluno).subscribe(
        data => {
          this.alunos = this.formatarData(data);
        }
      );
    }
  }

  formatarData(data: any): Aluno[] {
    return <Aluno[]>JSON.parse(data.contents)
  }

  atribuirValor(nomeAluno: string) {
    this.alunoSelecionado = nomeAluno;
  }

  alterarAluno(nomeAluno: string) {
    this.router.navigate(["/aluno/alterar/" + nomeAluno]);
    this.alunoService.getStudentByName(nomeAluno).subscribe(
      data => {
        this.alunos = this.formatarData(data);
        console.log(this.alunos);
      }
    )
  }

  deletarAluno(nomeAluno: string) {
    if (nomeAluno == '') {
      alert("Selecione um aluno para ser deletado!")
    } else {
      this.alunoService.deleteStudent(this.aluno).subscribe(
        data => {
          alert("Aluno deletado com sucesso!")
          console.log(data)
        }
      )
    }
  }

}
