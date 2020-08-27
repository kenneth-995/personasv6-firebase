import { Persona } from './persona.model';
import { Injectable, EventEmitter } from '@angular/core';
import { MensajesConsolaService } from './MensajesConsola.service'

@Injectable()

export class PersonasService {
    personas: Persona[] = [
        new Persona("Kenneth", "Griñan"),
        new Persona("Flavia", "Griñan")
    ]

    constructor() { }



    agregarPersona(persona: Persona) {
        this.personas.push(persona)

    }

    eliminarPersona(indice: number) {
        this.personas.splice(indice, 1)
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
    }



}