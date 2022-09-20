import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(
    private http: HttpClient,
    private _snack: MatSnackBar
  ) { }

  findAllByCategoria(id_categoria: String): Observable<Livro[]>{
    const url = `${this.baseUrl}/livros?categoria=${id_categoria}`
    return this.http.get<Livro[]>(url);
  }

  create(livro : Livro, id_categoria: String): Observable<Livro>{
    const url = `${this.baseUrl}/livros?categoria=${id_categoria}`
    return this.http.post<Livro>(url, livro);
  }

  mensagem(string : String): void{
    this._snack.open(`${string}`, 'Ok', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    });
  }
  
}
