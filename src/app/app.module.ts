/* DECLARACIONES DE ANGULAR */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

/* DECLARACIONES DE COMPONENTES */
import { AppComponent } from './app.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';
import { ErrorComponent } from './error/error.component'

/* DECLARACION DE SERVICIOS */
/* global, sirve para todos los componentes */
import { PersonasService } from './Personas.service';
import { MensajesConsolaService } from './MensajesConsola.service';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PersonasService, MensajesConsolaService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
