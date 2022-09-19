import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Livro } from './livro.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAllByCategoria(id_categoria: String): Observable<Livro[]>{
    const url = `${this.baseUrl}/livros?categoria=${id_categoria}`
    return this.http.get<Livro[]>(url);
  }
}
