import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleService } from '../../../Services/Security/role.service';
import { CargaMasivaRoleService } from '../../../Services/Security/CargaMasivaRole.service'; // Importación del servicio de carga masiva
import { Role } from '../../../models/M-Security/role';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roles: Role[] = [];
  roleForm!: FormGroup; // Formulario reactivo para crear/editar rol
  uploadForm: FormGroup; // Formulario reactivo para carga masiva
  isEditing: boolean = false;
  selectedFile: File | null = null; // Archivo seleccionado para carga masiva
  isLoading = false; // Indicador de carga
  message = ''; // Mensaje de éxito o error
  success = false; // Estado de éxito o error en la carga masiva
  headers = [
    { title: 'Nombre', field: 'nombre' },
    { title: 'Descripción', field: 'descripcion' },
    { title: 'Estado', field: 'state' }
  ];

  constructor(
    private fb: FormBuilder,
    private roleService: RoleService,
    private cargaMasivaRoleService: CargaMasivaRoleService // Servicio de carga masiva
  ) {
    this.uploadForm = this.fb.group({
      file: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.getRoles();
    this.initializeForm();
  }

  // Inicializa el formulario reactivo para crear/editar rol
  initializeForm(): void {
    this.roleForm = this.fb.group({
      id: [0],
      nombre: ['', [Validators.required, Validators.maxLength(100)]], // Agregada validación de longitud máxima
      descripcion: ['', [Validators.required, Validators.maxLength(255)]], // Agregada validación de longitud máxima
      state: [true],
      createdAt: [''],
      updatedAt: ['']
    });
  }

  // Obtiene la lista de roles sin eliminar
  getRoles(): void {
    this.roleService.getRolesSinEliminar().subscribe(
      (data) => {
        this.roles = data;
      },
      (error) => {
        console.error('Error al obtener los roles:', error);
      }
    );
  }

  // Envía el formulario para crear o actualizar un rol
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

  // Crea un nuevo rol
  createRole(role: Role): void {
    this.roleService.createRole(role).subscribe(
      () => {
        console.log('Rol creado con éxito');
        this.getRoles();
        this.resetForm();
      },
      (error) => {
        console.error('Error al crear el rol:', error);
      }
    );
  }

  // Actualiza un rol existente
  updateRole(role: Role): void {
    const updatedRole: Role = {
      ...role,
      updatedAt: new Date().toISOString() // Actualiza la fecha de actualización
    };

    this.roleService.updateRole(updatedRole).subscribe(
      () => {
        console.log('Rol actualizado con éxito');
        this.getRoles();
        this.resetForm();
        this.isEditing = false;
      },
      (error) => {
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

  // Elimina (visualmente) un rol estableciendo la fecha de eliminación
  deleteRole(id: number): void {
    const roleToDelete = this.roles.find(role => role.id === id);
    if (roleToDelete) {
      roleToDelete.deletedAt = new Date().toISOString();
      this.roleService.updateRole(roleToDelete).subscribe(
        () => {
          this.roles = this.roles.filter(role => role.id !== id);
          console.log('Rol eliminado visualmente');
        },
        (error) => {
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

  // Método para manejar la selección de archivo para la carga masiva
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.uploadForm.patchValue({
        file: file
      });
    }
  }

  // Método para enviar el archivo seleccionado al backend
  onSubmitUpload(): void {
    if (this.uploadForm.valid && this.selectedFile) {
      this.isLoading = true;
      this.cargaMasivaRoleService.subirArchivo(this.selectedFile).subscribe({
        next: () => {
          this.isLoading = false;
          this.success = true;
          this.message = 'Carga masiva de roles completada exitosamente.';
          this.getRoles(); // Refresca la lista de roles después de la carga masiva
        },
        error: (error: HttpErrorResponse) => {
          this.isLoading = false;
          this.success = false;
          this.message = `Error durante la carga masiva: ${error.message}`;
        }
      });
    }
  }
}
