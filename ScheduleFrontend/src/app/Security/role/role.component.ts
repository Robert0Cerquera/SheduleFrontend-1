import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleService } from '../../Services/Security/role.service';
import { Role } from '../../models/M-Security/role';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TableComponent } from '../../Componentes/table/table.component';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [ReactiveFormsModule, NgSelectModule, TableComponent],
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roles: Role[] = [];
  roleForm!: FormGroup; // Formulario reactivo
  isEditing: boolean = false;
  headers = [
    { title: 'Nombre', field: 'nombre' },
    { title: 'Descripción', field: 'descripcion' },
    { title: 'Estado', field: 'state' }
  ];

  constructor(
    private fb: FormBuilder,
    private roleService: RoleService
  ) {}

  ngOnInit(): void {
    this.getRoles();
    this.initializeForm();
  }

  // Inicializa el formulario reactivo
  initializeForm(): void {
    this.roleForm = this.fb.group({
      id: [0],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      state: [true],
      createdAt: [''],
      updatedAt: ['']
    });
  }

  // Obtiene la lista de roles sin eliminar
  getRoles(): void {
    this.roleService.getRolesSinEliminar().subscribe(
      data => {
        this.roles = data;
      },
      error => {
        console.error('Error al obtener los roles:', error);
      }
    );
  }

  // Envía el formulario
  onSubmit(): void {
    if (this.roleForm.valid) {
      const role: Role = this.roleForm.value;
      if (this.isEditing) {
        this.updateRole(role);
      } else {
        this.createRole(role);
      }
    }
  }

  // Crea un nuevo role
  createRole(role: Role): void {
    this.roleService.createRole(role).subscribe(
      response => {
        console.log('Rol creado con éxito:', response);
        this.getRoles();
        this.resetForm();
      },
      error => {
        console.error('Error al crear el rol:', error);
      }
    );
  }

  // Actualiza un role existente
  updateRole(role: Role): void {
    const updatedRole: Role = {
      ...role,
      updatedAt: new Date().toISOString() // Actualiza la fecha de actualización
    };

    this.roleService.updateRole(updatedRole).subscribe(
      response => {
        console.log('Rol actualizado con éxito:', response);
        this.getRoles();
        this.resetForm();
        this.isEditing = false;
      },
      error => {
        console.error('Error al actualizar el rol:', error);
      }
    );
  }

  // Edita un rol seleccionado
  editRole(role: Role): void {
    this.isEditing = true;
    this.roleForm.patchValue({
      id: role.id,
      nombre: role.nombre,
      descripcion: role.descripcion,
      state: role.state,
      createdAt: role.createdAt,
      updatedAt: role.updatedAt
    });
  }

  // Elimina (visualmente) un role estableciendo la fecha de eliminación
  deleteRole(id: number): void {
    const roleToDelete = this.roles.find(role => role.id === id);
    if (roleToDelete) {
      roleToDelete.deletedAt = new Date().toISOString();
      this.roleService.updateRole(roleToDelete).subscribe(
        () => {
          this.roles = this.roles.filter(role => role.id !== id);
          console.log('Rol eliminado visualmente');
        },
        error => {
          console.error('Error al eliminar el rol:', error);
        }
      );
    }
  }

  // Resetea el formulario para agregar o editar un nuevo rol
  resetForm(): void {
    this.roleForm.reset({
      id: 0,
      nombre: '',
      descripcion: '',
      state: true
    });
    this.isEditing = false;
  }
}
