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
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  users: User[] = [];
  persons: Person[] = []; // Lista de personas para el select
  newUser: User = {
    id: 0,
    usuario: '',
    contrasenia: '',
    personaId: {
      id: 0
    }
  };
  isEditing: boolean = false; // Variable para manejar el estado de edición

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
    if (!this.newUser.personaId) {
      console.error('Debe seleccionar una persona');
      return;
    }

    // Establecer fechas para el nuevo usuario
    this.newUser.createdAt = new Date();
    this.newUser.updatedAt = new Date();

    this.userService.createUser(this.newUser).subscribe(() => {
      this.getUsers(); // Refresca la lista de usuarios
      this.resetForm(); // Limpia el formulario
    });
  }

  // Método para obtener el nombre completo de la persona
  getPersonName(personId: number): string {
    const person = this.persons.find(p => p.id === personId);
    return person ? `${person.primerNombre} ${person.segundoNombre}` : 'Desconocido';
  }

  // Editar usuario
  editUser(user: User): void {
    this.newUser = { ...user };
    this.isEditing = true;
  }

  // Actualizar usuario
  updateUser(): void {
    if (!this.newUser.personaId) {
      console.error('Debe seleccionar una persona');
      return;
    }
    
    // Establecer la fecha de actualización
    this.newUser.updatedAt = new Date();

    this.userService.updateUser(this.newUser.id, this.newUser).subscribe(() => {
      this.getUsers(); // Refresca la lista de usuarios
      this.resetForm(); // Limpia el formulario
      this.isEditing = false;
    });
  }

  // Eliminar usuario
  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.getUsers(); // Refresca la lista de usuarios después de eliminar
    });
  }

  // Limpiar el formulario
  resetForm(): void {
    this.newUser = {
      id: 0,
      usuario: '',
      contrasenia: '',
      personaId: {
        id: 0
      }
    };
    this.isEditing = false;
  }
}
