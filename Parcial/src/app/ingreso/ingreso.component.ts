import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LibroService } from '../shared/libro.service';
import { libro } from '../models/Libro';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit{
  libro: libro=new libro();
  
  constructor(private LibroService: LibroService) {
  }
  

  ngOnInit() {
  }

  guardar():void{
    this.LibroService.create(this.libro).subscribe();
    console.log(this.libro.titulo);
    console.log(this.libro.referencia);
  }

}
