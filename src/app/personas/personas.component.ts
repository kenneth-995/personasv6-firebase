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
    /* this.personas = this.personasService.personas; */
    this.personasService.obtenerPersonas()
      .subscribe(
        (personas: Persona[]) => {
          // tanto en personas.component como en personas.service tendran el mismo array de personas, ya que aqui le estamos pasando lo mismo a los 2! 
          this.personas = personas;
          this.personasService.setPersonas(personas);
        }
      )
  }

  agregar() {
    this.router.navigate(['personas/agregar'])
  }

}
