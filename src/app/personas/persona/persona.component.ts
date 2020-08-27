import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../Personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  // Este componente va a tener 2 variables de ENTRADA
  @Input() persona: Persona;
  @Input() indice: number;

  title = 'C persona (C hijo)';

  constructor(private personasService: PersonasService) {

  }

  ngOnInit(): void {
  }


  onClickDeletePerson() {
    console.log('desde eliminar persona!')
    this.personasService.eliminarPersona(this.indice)
  }

}
