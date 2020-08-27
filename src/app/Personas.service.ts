import { Persona } from './persona.model';
import { Injectable, EventEmitter } from '@angular/core';
import { DataService } from './data.service';

@Injectable()

export class PersonasService {
    personas: Persona[] = []

    constructor(private dataService: DataService) { }

    obtenerPersonas() {
        return this.dataService.cargarPersonas();
    }

    setPersonas(personas: Persona[]) {
        this.personas = personas;
    }

    agregarPersona(persona: Persona) {

        if (this.personas == null) {
            this.personas = [];
        }

        this.personas.push(persona);
        this.dataService.guardarPersonas(this.personas);

    }

    eliminarPersona(indice: number) {
        this.personas.splice(indice, 1);
    }

    // buscamos la persona con el indice, para modificarla
    encontrarPersona(index: number) {
        let persona: Persona = this.personas[index];
        return persona;
    }

    modificarPersona(index: number, newPersona: Persona) {
        // vamos a modificar el array(1 persona), ya que estamos trabajando con referencias, al modificar el creado se esta modificando el del array!(es el mismo elemento)
        let persona = this.personas[index];
        persona.nombre = newPersona.nombre;
        persona.apellido = newPersona.apellido;

        this.dataService.modificarPersona(index, persona);
    }



}