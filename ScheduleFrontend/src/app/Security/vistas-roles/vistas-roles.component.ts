import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VistaService } from '../../Services/Security/vista.service';
import { RoleService } from '../../Services/Security/role.service';
import { VistasRolesService } from '../../Services/Security/vistas-roles.service';
import { Vista } from '../../models/M-Security/vista';
import { Role } from '../../models/M-Security/role';
import { VistasRoles } from '../../models/M-Security/vistas-roles';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TableComponent } from '../../Componentes/table/table.component';

@Component({
  selector: 'app-vistas-roles',
  standalone: true,
  imports: [ReactiveFormsModule, NgSelectModule, TableComponent],
  templateUrl: './vistas-roles.component.html',
  styleUrls: ['./vistas-roles.component.css']
})
export class VistasRolesComponent implements OnInit {
  vistasRoles: VistasRoles[] = [];
  vistas: Vista[] = [];
  roles: Role[] = [];
  vistasRolesForm!: FormGroup; // Formulario reactivo
  isEditing: boolean = false;
  headers = [
    { title: 'Vista', field: 'vistaId.nombre' },
    { title: 'Rol', field: 'roleId.nombre' },
    { title: 'Estado', field: 'state' }
  ];

  constructor(
    private fb: FormBuilder,
    private vistasRolesService: VistasRolesService,
    private vistaService: VistaService,
    private roleService: RoleService
  ) {}

  ngOnInit(): void {
    this.getVistasRoles();
    this.getVistas();
    this.getRoles();
    this.initializeForm();
  }

  initializeForm(): void {
    this.vistasRolesForm = this.fb.group({
      id: [0],
      state: [true],
      createdAt: [''],  // Incluido `createdAt`
      updatedAt: [''],  // Incluido `updatedAt`
      vistaId: this.fb.group({
        id: [null, Validators.required]
      }),
      roleId: this.fb.group({
        id: [null, Validators.required]
      })
    });
  }
  

  // Obtiene la lista de relaciones vistas-roles sin eliminar
  getVistasRoles(): void {
    this.vistasRolesService.getVistasRolesSinEliminar().subscribe(
      data => {
        this.vistasRoles = data;
      },
      error => {
        console.error('Error al obtener las relaciones vistas-roles:', error);
      }
    );
  }

  // Obtiene la lista de vistas sin eliminar
  getVistas(): void {
    this.vistaService.getVistasSinEliminar().subscribe(
      data => {
        this.vistas = data.map(vista => ({
          ...vista,
          nombreCompleto: `${vista.nombre} (${vista.state ? 'Activo' : 'Inactivo'})`
        }));
      },
      error => {
        console.error('Error al obtener las vistas:', error);
      }
    );
  }

  // Obtiene la lista de roles sin eliminar
  getRoles(): void {
    this.roleService.getRolesSinEliminar().subscribe(
      data => {
        this.roles = data.map(role => ({
          ...role,
          nombreCompleto: `${role.nombre} (${role.state ? 'Activo' : 'Inactivo'})`
        }));
      },
      error => {
        console.error('Error al obtener los roles:', error);
      }
    );
  }

  // Envía el formulario
  onSubmit(): void {
    if (this.vistasRolesForm.valid) {
      const vistasRoles: VistasRoles = this.vistasRolesForm.value;
      if (this.isEditing) {
        this.updateVistasRoles(vistasRoles);
      } else {
        this.createVistasRoles(vistasRoles);
      }
    }
  }

  // Crea una nueva relación vista-rol
  createVistasRoles(vistasRoles: VistasRoles): void {
    this.vistasRolesService.createVistasRoles(vistasRoles).subscribe(
      response => {
        console.log('Relación Vista-Rol creada con éxito:', response);
        this.getVistasRoles();
        this.resetForm();
      },
      error => {
        console.error('Error al crear la relación vista-rol:', error);
      }
    );
  }

  updateVistasRoles(vistasRoles: VistasRoles): void {
    const updatedVistasRoles: VistasRoles = {
      ...vistasRoles,
      updatedAt: new Date().toISOString() // Actualiza la fecha de actualización
    };
  
    this.vistasRolesService.updateVistasRoles(updatedVistasRoles).subscribe(
      response => {
        console.log('Relación Vista-Rol actualizada con éxito:', response);
        this.getVistasRoles();
        this.resetForm();
        this.isEditing = false;
      },
      error => {
        console.error('Error al actualizar la relación vista-rol:', error);
      }
    );
  }
  

  editVistasRoles(vistasRoles: VistasRoles): void {
    this.isEditing = true;
    this.vistasRolesForm.patchValue({
      id: vistasRoles.id,
      state: vistasRoles.state,
      vistaId: {
        id: vistasRoles.vistaId?.id || null
      },
      roleId: {
        id: vistasRoles.roleId?.id || null
      },
      createdAt: vistasRoles.createdAt,  // Incluido `createdAt`
      updatedAt: vistasRoles.updatedAt   // Incluido `updatedAt`
    });
  }
  

  // Elimina (visualmente) una relación vista-rol estableciendo la fecha de eliminación
  deleteVistasRoles(id: number): void {
    const vistasRolesToDelete = this.vistasRoles.find(vr => vr.id === id);
    if (vistasRolesToDelete) {
      vistasRolesToDelete.deletedAt = new Date().toISOString();
      this.vistasRolesService.updateVistasRoles(vistasRolesToDelete).subscribe(
        () => {
          this.vistasRoles = this.vistasRoles.filter(vr => vr.id !== id);
          console.log('Relación Vista-Rol eliminada visualmente');
        },
        error => {
          console.error('Error al eliminar la relación vista-rol:', error);
        }
      );
    }
  }

  // Resetea el formulario para agregar o editar una nueva relación vista-rol
  resetForm(): void {
    this.vistasRolesForm.reset({
      id: 0,
      vistaId: null,
      roleId: null,
      state: true
    });
    this.isEditing = false;
  }
}
