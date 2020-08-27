import { Persona } from './persona.model';
import { Injectable } from '@angular/core';
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

        // si no hay nada, es null, si es null no es un array, si no es un arrayy, no puedo hacer PUSH, pero no lo habia inicializado como array? ¿*?
        if (this.personas == null) {
            this.personas = [];
        }

        this.personas.push(persona);
        this.dataService.guardarPersonas(this.personas);

    }

    eliminarPersona(indice: number) {
        this.personas.splice(indice, 1);
        this.dataService.eliminarPersona(indice);
        // Para arreglar los indices en la base de datos, vamos a guardar el array despues de borrar a una persona
        this.modificarPersonas();
    }

    modificarPersonas() {
        if (this.personas != null) {
            this.dataService.guardarPersonas(this.personas)
        }
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