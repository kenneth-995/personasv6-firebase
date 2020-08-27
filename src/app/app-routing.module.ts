import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { ErrorComponent } from './error/error.component';

//  Actua de manera diferente, de esta manera se carga cada componente en la misma pagina del componente padre 'personas'. 
const routes: Routes = [
  { path: '', component: PersonasComponent },
  {
    path: 'personas', component: PersonasComponent, children: [
      { path: 'agregar', component: FormularioComponent },
      { path: ':id', component: FormularioComponent },
    ]
  },
  { path: '**', component: ErrorComponent },
]
//  Actua de manera diferente, de esta manera se carga cada componente en una pagina diferente. 
/* const routes: Routes = [
  { path: '', component: PersonasComponent },
  { path: 'personas', component: PersonasComponent },
  { path: 'personas/agregar', component: FormularioComponent },
  { path: 'personas/:id', component: FormularioComponent },
] */


@NgModule({
  /* Agregamos el concepto de routingModule */
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }


