import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { PersonService } from '../../Services/person.service';
import { User } from '../../models/user';
import { Person } from '../../models/person';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
 
  users: User[] = [];
  persons: Person[] = []; // Lista de personas para el select
  newUser: User = {
    id: 0,
    usuario: '',
    contrasenia: '',
    personId: 0 // Inicializa como 0 o un valor predeterminado válido
  };

  constructor(private userService: UserService, private personService: PersonService) {}

  ngOnInit(): void {
    this.getUsers();
    this.getPersons(); // Llama al método para obtener la lista de personas
  }

  // Obtener lista de usuarios
  getUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  // Obtener lista de personas
  getPersons(): void {
    this.personService.getPersons().subscribe(data => {
      this.persons = data;
    });
  }

  // Crear un nuevo usuario
  createUser(): void {
    if (!this.newUser.personId) {
      console.error('Debe seleccionar una persona');
      return;
    }
    
    this.userService.createUser(this.newUser).subscribe(() => {
      this.getUsers(); // Refresca la lista de usuarios
      this.newUser = { id: 0, usuario: '', contrasenia: '', personId: 0 }; // Limpia el formulario
    });
  }

  // Método para obtener el nombre completo de la persona
  getPersonName(personId: number): string {
    const person = this.persons.find(p => p.id === personId);
    return person ? `${person.primerNombre} ${person.segundoNombre}` : 'Desconocido';
  }

  // Editar usuario
  updateUser(id: number): void {
    console.log('Editar usuario con ID:', id);
  }

  // Eliminar usuario
  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.getUsers(); // Refresca la lista de usuarios después de eliminar
    });
  }
}
