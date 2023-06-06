import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from './ingreso/ingreso.component';
import { ListaComponent } from './lista/lista.component';
import { DetallesComponent } from './detalles/detalles.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  {path: '', component:IngresoComponent},
  {path:'lista',component:ListaComponent},
  { path: 'detalles', component: DetallesComponent },
  { path: 'editar', component: EditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
