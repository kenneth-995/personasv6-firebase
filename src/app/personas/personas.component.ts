import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../Personas.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = []

  constructor(private personasService: PersonasService,
    private router: Router) { }

  // Al iniciarse el componente inicializamos el array
  ngOnInit() {
    this.personas = this.personasService.personas;
  }

  agregar() {
    this.router.navigate(['personas/agregar'])
  }

}
