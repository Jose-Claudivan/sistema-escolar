import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Curso } from './Curso';

const api_url = "https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/curso/";


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private httpClient: HttpClient) { }

  getAllCursos() {
    return this.httpClient.get(api_url + "consultar/");
  }

  getCursoByName(nome: string) {
    return this.httpClient.get(api_url + "consultar/" + nome);
  }

  addCurso(curso: Curso) {
    alert("Curso adicionado com sucesso!")
    return this.httpClient.post(api_url + "/incluir", curso);
  }

  updateCurso(curso: Curso){
    alert("Curso alterado com sucesso!")        
    return this.httpClient.patch(api_url + "/alterarparcial", curso);
  }

  deleteCurso(curso: Curso) {
    alert("Curso deletado com sucesso!")  
    return this.httpClient.post(api_url + "/remover", curso);
  }
}


