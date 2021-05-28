import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/services/Aluno';
import { AlunoService } from 'src/app/services/aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-aluno',
  templateUrl: './adicionar-aluno.component.html',
  styleUrls: ['./adicionar-aluno.component.css']
})
export class AdicionarAlunoComponent implements OnInit {

  aluno: Aluno = new Aluno();

  constructor(
    private alunoService: AlunoService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  adicionarAluno(nomeAluno: string, dataNascimento: string){
    this.aluno.nome = nomeAluno;
    this.aluno.dataNascimento = dataNascimento;
    
    this.alunoService.addStudent(this.aluno).subscribe(
      data => {
        console.log(data)
        alert("Aluno adicionado com sucesso!")
        this.router.navigate(['/aluno'])
      }
    );
  }
}
