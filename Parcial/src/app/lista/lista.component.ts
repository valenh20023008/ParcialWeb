import { Component , OnInit} from '@angular/core';
import { libro } from '../models/Libro';
import { LibroService } from '../shared/libro.service';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared/shared-data.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  libro: libro= new libro();
  libros: libro[]=[];
  autor : string = '';

  constructor (private LibroService:LibroService,private router: Router, private sharedData:SharedDataService){}

  ngOnInit():void{
    console.log(this.libro.titulo);
    this.LibroService.read().subscribe(libros=>this.libros=libros)
  }
  verDetalles(titulo: String) {
    console.log("Detalles del libro: " + titulo);
    this.sharedData.setTexto(titulo);
    
    this.router.navigate(['/detalles']);
  }
  
  editarLibro(titulo: String) {
    this.sharedData.setTexto(titulo);
    this.router.navigate(['/editar']);
  }


}
