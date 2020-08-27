import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
//Necesitamos este decorador ya que estamos injectanodo un servicio dentro de otro servicio
@Injectable()

export class DataService {

    constructor(private httpClient: HttpClient) { }

    //guarda info en la bbdd// url+nombre coleccion
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
    }

    cargarPersonas() {
        return this.httpClient.get('https://personasv6-firebase.firebaseio.com/datos.json');
    }

    modificarPersona(index: number, persona: Persona) {
        let url: string;

        url = 'https://personasv6-firebase.firebaseio.com/datos/' + index + '.json';

        this.httpClient.put(url, persona)
            .subscribe(
                (response) => {
                    console.log('Modificacion correcta: ' + response);
                },
                (error) => {
                    console.log('Error al modificar una persona: ' + error);
                }
            )
    }

    eliminarPersona(index: number) {
        let url: string;

        url = 'https://personasv6-firebase.firebaseio.com/datos/' + index + '.json';

        this.httpClient.delete(url)
            .subscribe(
                (response) => {
                    console.log('Eliminacion correcta: ' + response);
                },
                (error) => {
                    console.log('Error al eliminar una persona: ' + error);
                }
            )
    }

}