import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../Services/person.service';
import { CommonModule } from '@angular/common';
import { Person } from '../../models/person'; 
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  persons: Person[] = []; // Usa el tipo Person

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons(): void {
    this.personService.getPersons().subscribe(data => {
      this.persons = data;
    });
  } 

  updatePerson(id: number): void {
    // Implementa la lógica para editar una persona
    console.log('Editar persona con ID:', id);
  }

  deletePerson(id: number): void {
    // Implementa la lógica para eliminar una persona
    console.log('Eliminar persona con ID:', id);
    this.personService.deletePerson(id).subscribe(() => {
      this.getPersons(); // Refresca la lista después de eliminar
    });
  }
}
