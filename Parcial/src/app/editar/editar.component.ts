import { Component, OnInit } from '@angular/core';
import { libro } from '../models/Libro';
import { LibroService } from '../shared/libro.service';
import { SharedDataService } from '../shared/shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{
  libro: libro=new libro();
  titulo:String='';

  ngOnInit(): void {
    this.titulo=this.sharedData.getTexto();
    console.log(this.titulo);
    this.actualizar(this.titulo);
  }
  constructor(private sharedData:SharedDataService,private router: Router,private LibroService:LibroService){}

  actualizar(titulo:String):void{
    this.LibroService.findLibroN(titulo).subscribe(
      libroEncontrado => {
        console.log(libroEncontrado);
        this.libro = libroEncontrado; 
      },
      error => {
        console.error(error);
      }

    );


  }

  update():void{
    this.LibroService.update(this.libro).subscribe(
      (updatedBook: libro) => {
        console.log('Actualizado');
        this.router.navigate(['/lista']);
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }

}
