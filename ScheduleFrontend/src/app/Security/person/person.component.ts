import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../Services/person.service';
import { Person } from '../../models/person'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  persons: Person[] = [];
  selectedPerson: Person = {
    id: 0,
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    tipoDocumento: '',
    numeroDocumento: '',
    telefono: '',
    email: '',
    direccion: '',
    fechaNacimiento: '',
    genero: '',
    state: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: undefined
  };
  isEditing: boolean = false;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons(): void {
    this.personService.getPersons().subscribe(data => {
      console.log(data);
      this.persons = data;
    });
  }

  onSubmit(): void {
    if (this.isEditing) {
      this.updatePerson(this.selectedPerson);
    } else {
      this.createPerson();
    }
  }

  createPerson(): void {
    this.selectedPerson.createdAt = new Date().toISOString();
    this.selectedPerson.updatedAt = new Date().toISOString();
    this.selectedPerson.deletedAt = undefined;

    this.personService.createPerson(this.selectedPerson).subscribe(
      (response) => {
        console.log('Persona creada con éxito:', response);
        this.getPersons(); // Refresca la lista después de crear
        this.resetForm(); // Limpia el formulario después de crear
      },
      (error) => {
        console.error('Error al crear la persona:', error);
      }
    );
  }

  editPerson(person: Person): void {
    this.selectedPerson = { ...person };
    this.isEditing = true;
  }

  updatePerson(person: Person): void {
    person.updatedAt = new Date().toISOString(); // Asegúrate de actualizar el timestamp

    this.personService.updatePerson(person).subscribe(
      (response) => {
        console.log('Persona actualizada con éxito:', response);
        this.getPersons(); // Refresca la lista después de actualizar
        this.resetForm(); // Limpia el formulario después de actualizar
        this.isEditing = false;
      },
      (error) => {
        console.error('Error al actualizar la persona:', error);
      }
    );
  }

  deletePerson(id: number): void {
    console.log('Eliminar persona con ID:', id);
    this.personService.deletePerson(id).subscribe(() => {
      this.getPersons(); // Refresca la lista después de eliminar
    });
  }

  resetForm(): void {
    this.selectedPerson = {
      id: 0,
      primerNombre: '',
      segundoNombre: '',
      primerApellido: '',
      segundoApellido: '',
      tipoDocumento: '',
      numeroDocumento: '',
      telefono: '',
      email: '',
      direccion: '',
      fechaNacimiento: '',
      genero: '',
      state: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      deletedAt: undefined
    };
    this.isEditing = false;
  }
}
