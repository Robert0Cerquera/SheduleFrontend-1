import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../Services/Security/role.service'; // Asegúrate de que la ruta al servicio sea correcta
import { Role } from '../../models/Security/role'; // Asegúrate de que la ruta al modelo sea correcta
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roles: Role[] = [];
  selectedRole: Role = {
    id: 0,
    nombre: '',
    descripcion: '',
    state: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: undefined
  };
  isEditing: boolean = false;
  duplicateNameError: boolean = false; // Bandera para mostrar alerta

  constructor(private roleService: RoleService) {}

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(): void {
    this.roleService.getRoles().subscribe(data => {
      this.roles = data.filter(role => !role.deletedAt);
    }, error => {
      console.error('Error al obtener los roles:', error);
    });
  }

  onSubmit(): void {
    // Verificar si el nombre del rol ya existe
    const duplicateRole = this.roles.find(role => role.nombre.toLowerCase() === this.selectedRole.nombre.toLowerCase());
    
    if (duplicateRole) {
      this.duplicateNameError = true; // Muestra la alerta
      return;
    } else {
      this.duplicateNameError = false;
    }

    if (this.isEditing) {
      this.updateRole(this.selectedRole);
    } else {
      this.createRole();
    }
  }

  createRole(): void {
    this.selectedRole.createdAt = new Date().toISOString();
    this.selectedRole.updatedAt = new Date().toISOString();
    this.selectedRole.deletedAt = undefined;

    this.roleService.createRole(this.selectedRole).subscribe(
      (response: Role) => {
        console.log('Rol creado con éxito:', response);
        this.getRoles(); // Refresca la lista después de crear
        this.resetForm(); // Limpia el formulario después de crear
      },
      (error) => {
        console.error('Error al crear el rol:', error);
      }
    );
  }

  editRole(role: Role): void {
    this.selectedRole = { ...role };
    this.isEditing = true;
  }

  updateRole(role: Role): void {
    role.updatedAt = new Date().toISOString();

    this.roleService.updateRole(role).subscribe(
      (response: Role) => {
        console.log('Rol actualizado con éxito:', response);
        this.getRoles(); // Refresca la lista después de actualizar
        this.resetForm(); // Limpia el formulario después de actualizar
        this.isEditing = false;
      },
      (error) => {
        console.error('Error al actualizar el rol:', error);
      }
    );
  }

  deleteRole(id: number): void {
    const roleToDelete = this.roles.find(role => role.id === id);
    if (roleToDelete) {
      roleToDelete.deletedAt = new Date().toISOString(); // Marca como eliminado con la fecha actual
      this.roleService.updateRole(roleToDelete).subscribe(() => {
        console.log('Rol eliminado con éxito (soft delete)');
        this.getRoles(); // Refresca la lista después de eliminar
      }, error => {
        console.error('Error al eliminar el rol:', error);
      });
    }
  }

  resetForm(): void {
    this.selectedRole = {
      id: 0,
      nombre: '',
      descripcion: '',
      state: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      deletedAt: undefined
    };
    this.isEditing = false;
    this.duplicateNameError = false; // Restablece la alerta al limpiar el formulario
  }
}
