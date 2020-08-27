/* DIRECTIVAS DE ANGULAR */
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

/* COMPONENTES */
import { Persona } from '../../persona.model'

/* SERVICIOS */
import { PersonasService } from '../../Personas.service'


@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

    nombreInput: string;
    apellidoInput: string;
    indexRecibidoUrl: number;
    // Variable para el [queryParams]="{modoEdicion:'1'}"
    modoEdicion: number;

    constructor(private personasService: PersonasService,
        private router: Router,
        private route: ActivatedRoute) {

    }

    ngOnInit(): void {

        //recuperamos el parametro modoEdicion, + para pasar el string a number
        this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];

        /* el nombre id viene definido el el app-routing.module */
        this.indexRecibidoUrl = this.route.snapshot.params['id'];

        //comprobamos en que modo estamos(2 maneras, por el id esta comentada!)
        //if (this.indexRecibidoUrl) { identificando el modo por el id
        if (this.modoEdicion != null && this.modoEdicion === 1) { //identificando el modo por [queryParams]
            // encontramos la persona que queremos modificar
            let persona: Persona = this.personasService.encontrarPersona(this.indexRecibidoUrl);
            // llenamos el formulario con los datos de la persona
            this.nombreInput = persona.nombre;
            this.apellidoInput = persona.apellido;
        }
    }

    onGuardarPersona() {
        /* let newPersona = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value); */
        let newPersona = new Persona(this.nombreInput, this.apellidoInput);
        //comprobamos en que modo estamos(2 maneras, por el id esta comentada!)
        //if (this.indexRecibidoUrl) {
        if (this.modoEdicion != null && this.modoEdicion === 1) {
            // MODIFICAMOS una persona
            this.personasService.modificarPersona(this.indexRecibidoUrl, newPersona);
        } else {
            // AGREGAMOS persona
            this.personasService.agregarPersona(newPersona);
        }
        this.router.navigate(['personas']);
    }
    // para eliminar ya tenemos la funcion en el componente persona, pero el del curso lo hace asi, yo tengo las 2 maneras!
    eliminarPersona() {
        if (this.indexRecibidoUrl != null) {
            this.personasService.eliminarPersona(this.indexRecibidoUrl);
        }
        this.router.navigate(['personas']);
    }


}
