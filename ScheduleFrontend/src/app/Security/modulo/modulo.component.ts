import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModuloService } from '../../Services/Security/modulo.service';
import { Modulo } from '../../models/M-Security/modulo';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TableComponent } from '../../Componentes/table/table.component';

@Component({
  selector: 'app-modulo',
  standalone: true,
  imports: [ReactiveFormsModule, NgSelectModule, TableComponent],
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})
export class ModuloComponent implements OnInit {
  modulos: Modulo[] = [];
  moduloForm!: FormGroup; // Formulario reactivo
  isEditing: boolean = false;

  headers = [
    { title: 'Nombre', field: 'nombre' },
    { title: 'Ruta', field: 'ruta' },
    { title: 'Icono', field: 'icono' },
    { title: 'Estado', field: 'state' }
  ];

  // Lista de íconos disponibles para seleccionar
  iconos = [
    { id: 1, name: 'Home', class: 'fa fa-home' },
    { id: 2, name: 'Usuario', class: 'fa fa-user' },
    { id: 3, name: 'Configuración', class: 'fa fa-cog' },
    { id: 4, name: 'Gráfico', class: 'fa fa-chart-bar' },
    { id: 5, name: 'Libro', class: 'fa fa-book' },
    { id: 6, name: 'Comentarios', class: 'fa fa-comments' },
    { id: 7, name: 'Correo', class: 'fa fa-envelope' },
    { id: 8, name: 'Notificación', class: 'fa fa-bell' },
    { id: 9, name: 'Seguridad', class: 'fa fa-shield-alt' },
    { id: 10, name: 'Operacional', class: 'fa fa-tachometer-alt' },
    { id: 11, name: 'Parametrización', class: 'fa fa-cogs' },
    { id: 12, name: 'Edificio', class: 'fa fa-building' },
    { id: 13, name: 'Ubicación', class: 'fa fa-map-marker-alt' }
  ];

  constructor(
    private fb: FormBuilder,
    private moduloService: ModuloService
  ) {}

  ngOnInit(): void {
    this.getModulos();
    this.initializeForm();
  }

  // Inicializa el formulario reactivo
  initializeForm(): void {
    this.moduloForm = this.fb.group({
      id: [0],
      nombre: ['', Validators.required],
      ruta: ['', Validators.required],
      icono: ['', Validators.required],
      state: [true],
      createdAt: [''],
      updatedAt: ['']
    });
  }

  // Obtiene la lista de módulos sin eliminar
  getModulos(): void {
    this.moduloService.getModulosSinEliminar().subscribe(
      data => {
        this.modulos = data;
      },
      error => {
        console.error('Error al obtener los módulos:', error);
      }
    );
  }

  // Envía el formulario
  onSubmit(): void {
    if (this.moduloForm.valid) {
      const modulo: Modulo = this.moduloForm.value;
      if (this.isEditing) {
        this.updateModulo(modulo);
      } else {
        this.createModulo(modulo);
      }
    }
  }

  // Crea un nuevo módulo
  createModulo(modulo: Modulo): void {
    this.moduloService.createModulo(modulo).subscribe(
      response => {
        console.log('Módulo creado con éxito:', response);
        this.getModulos();
        this.resetForm();
      },
      error => {
        console.error('Error al crear el módulo:', error);
      }
    );
  }

  // Actualiza un módulo existente
  updateModulo(modulo: Modulo): void {
    const updatedModulo: Modulo = {
      ...modulo,
      updatedAt: new Date().toISOString() // Actualiza la fecha de actualización
    };

    this.moduloService.updateModulo(updatedModulo).subscribe(
      response => {
        console.log('Módulo actualizado con éxito:', response);
        this.getModulos();
        this.resetForm();
        this.isEditing = false;
      },
      error => {
        console.error('Error al actualizar el módulo:', error);
      }
    );
  }

  // Edita un módulo seleccionado
  editModulo(modulo: Modulo): void {
    this.isEditing = true;
    this.moduloForm.patchValue({
      id: modulo.id,
      nombre: modulo.nombre,
      ruta: modulo.ruta,
      icono: modulo.icono,
      state: modulo.state,
      createdAt: modulo.createdAt,
      updatedAt: modulo.updatedAt
    });
  }
  deleteModulo(id: number): void {
    const moduloToDelete = this.modulos.find(modulo => modulo.id === id);
    if (moduloToDelete) {
      moduloToDelete.deletedAt = new Date().toISOString();
      this.moduloService.updateModulo(moduloToDelete).subscribe(
        () => {
          this.modulos = this.modulos.filter(modulo => modulo.id !== id);
          console.log('Módulo eliminado visualmente');
        },
        error => {
          console.error('Error al eliminar el módulo:', error);
        }
      );
    }
  }

  // Resetea el formulario para agregar o editar un nuevo módulo
  resetForm(): void {
    this.moduloForm.reset({
      id: 0,
      nombre: '',
      ruta: '',
      icono: '',
      state: true
    });
    this.isEditing = false;
  }
}
