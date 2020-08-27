import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()

export class DataService {

    constructor(private httpClient: HttpClient) { }

    //guarda info en la bbdd
    // url+nombre coleccion
    //https://personasv6-firebase.firebaseio.com/ + <nombreColeccion.json>
    guardarPersonas(personas: Persona[]) {
        this.httpClient.put('https://personasv6-firebase.firebaseio.com/datos.json', personas)
            .subscribe(
                (response) => {
                    console.log('resultado de guardar las personas' + response);
                },
                (error) => {
                    console.log('Error al guardar las personas' + error);
                }
            )
            ;
    }
}