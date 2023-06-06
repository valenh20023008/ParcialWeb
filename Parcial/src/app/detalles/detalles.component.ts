import { Component, OnInit } from '@angular/core';
import { libro } from '../models/Libro';
import { LibroService } from '../shared/libro.service';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from '../shared/shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit{
  libro: libro=new libro();
  titulo:String='';

  constructor(private LibroService:LibroService, private activatedRoute:ActivatedRoute,private sharedData:SharedDataService,private router: Router){}

  ngOnInit(): void {
    this.titulo=this.sharedData.getTexto();
    console.log(this.titulo);
    this.obtenerDetallesLibro(this.titulo);
  }
  
  obtenerDetallesLibro(ref: String): void {
    console.log(ref)
    this.LibroService.findLibroN(ref).subscribe(
      libroEncontrado => {
        console.log(libroEncontrado);
        this.libro = libroEncontrado;
      },
      error => {
        console.error(error);
      }
    );
  }
  volver() {
    this.router.navigate(['/lista']);
  }

}
