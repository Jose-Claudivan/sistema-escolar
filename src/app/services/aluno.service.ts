import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from './Aluno';

const api_url = "https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/aluno/";

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private httpClient: HttpClient) { }

  getAllStudents() {
    return this.httpClient.get(api_url + "consultar/");
  }

  getStudentByName(nome: string) {
    return this.httpClient.get(api_url + `consultar/${nome}`);
  }

  addStudent(aluno: Aluno) {
    return this.httpClient.post(api_url + "incluir/", aluno);
  }

  updateStudent(aluno: Aluno) {
    return this.httpClient.patch(api_url + "/alterarparcial", aluno);
  }

  deleteStudent(aluno: Aluno) {
    return this.httpClient.post(api_url + "/remover", aluno)
  }
}
