import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { libro } from '../models/Libro';

@Injectable({
    providedIn: 'root'
})

export class LibroService{
    constructor(private http: HttpClient) { }

    findLibroN(titulo: String) : Observable<libro> {
      return this.http.get<libro> ("http://localhost:8080/crud/n" + titulo);
    }

    findLibro(id: number): Observable<libro>{
        return this.http.get<libro> ("http://localhost:8080/crud/" + id);
    }
    read(): Observable<libro[]>{
        return this.http.get<libro[]> ("http://localhost:8080/crud/read");
      }
    
      create(libro:libro): Observable<libro>{
        return this.http.post<libro> ("http://localhost:8080/crud/create",libro);
      }
    
      update(libro:libro): Observable<libro>{
        return this.http.put<libro> ("http://localhost:8080/crud/update",libro)
      }
    
      delete(id: number) : Observable<libro> {
        return this.http.delete<libro> ("http://localhost:8080/crud/delete/" + id);
      }
}