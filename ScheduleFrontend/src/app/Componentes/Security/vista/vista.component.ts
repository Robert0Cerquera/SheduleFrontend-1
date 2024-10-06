import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VistaService } from '../../../Services/Security/vista.service';
import { ModuloService } from '../../../Services/Security/modulo.service';
import { Vista } from '../../../models/M-Security/vista';
import { Modulo } from '../../../models/M-Security/modulo';


@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {
  vistas: Vista[] = [];
  modulos: Modulo[] = [];
  vistaForm!: FormGroup; // Formulario reactivo
  isEditing: boolean = false;
  headers = [
    { title: 'Nombre', field: 'nombre' },
    { title: 'Descripción', field: 'descripcion' },
    { title: 'Ruta', field: 'ruta' },
    { title: 'Módulo', field: 'moduloId.nombre' },
    { title: 'Estado', field: 'state' }
  ];

  constructor(
    private fb: FormBuilder,
    private vistaService: VistaService,
    private moduloService: ModuloService
  ) {}

  ngOnInit(): void {
    this.getVistas();
    this.getModulos();
    this.initializeForm();
  }

  // Inicializa el formulario reactivo
  initializeForm(): void {
    this.vistaForm = this.fb.group({
      id: [0],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      ruta: ['', Validators.required],
      moduloId: this.fb.group({
        id: [null, Validators.required]
      }),
      state: [true],
      createdAt: [''],
      updatedAt: ['']
    });
  }

  // Obtiene la lista de vistas sin eliminar
  getVistas(): void {
    this.vistaService.getVistasSinEliminar().subscribe(
      data => {
        this.vistas = data;
      },
      error => {
        console.error('Error al obtener las vistas:', error);
      }
    );
  }

  // Obtiene la lista de módulos sin eliminar
  getModulos(): void {
    this.moduloService.getModulosSinEliminar().subscribe(
      data => {
        this.modulos = data.map(modulo => ({
          ...modulo,
          nombreCompleto: `${modulo.nombre} (${modulo.state ? 'Activo' : 'Inactivo'})`
        }));
      },
      error => {
        console.error('Error al obtener los módulos:', error);
      }
    );
  }

  // Envía el formulario
  onSubmit(): void {
    if (this.vistaForm.valid) {
      const vista: Vista = this.vistaForm.value;
      if (this.isEditing) {
        this.updateVista(vista);
      } else {
        this.createVista(vista);
      }
    }
  }

  // Crea una nueva vista
  createVista(vista: Vista): void {
    this.vistaService.createVista(vista).subscribe(
      response => {
        console.log('Vista creada con éxito:', response);
        this.getVistas();
        this.resetForm();
      },
      error => {
        console.error('Error al crear la vista:', error);
      }
    );
  }

  // Actualiza una vista existente
  updateVista(vista: Vista): void {
    const updatedVista: Vista = {
      ...vista,
      updatedAt: new Date().toISOString() // Actualiza la fecha de actualización
    };

    this.vistaService.updateVista(updatedVista).subscribe(
      response => {
        console.log('Vista actualizada con éxito:', response);
        this.getVistas();
        this.resetForm();
        this.isEditing = false;
      },
      error => {
        console.error('Error al actualizar la vista:', error);
      }
    );
  }

  // Edita una vista seleccionada
  editVista(vista: Vista): void {
    this.isEditing = true;
    this.vistaForm.patchValue({
      id: vista.id,
      nombre: vista.nombre,
      descripcion: vista.descripcion,
      ruta: vista.ruta,
      moduloId: {
        id: vista.moduloId?.id || null
      },
      state: vista.state,
      createdAt: vista.createdAt,
      updatedAt: vista.updatedAt
    });
  }

  // Elimina (visualmente) una vista estableciendo la fecha de eliminación
  deleteVista(id: number): void {
    const vistaToDelete = this.vistas.find(vista => vista.id === id);
    if (vistaToDelete) {
      vistaToDelete.deletedAt = new Date().toISOString();
      this.vistaService.updateVista(vistaToDelete).subscribe(
        () => {
          this.vistas = this.vistas.filter(vista => vista.id !== id);
          console.log('Vista eliminada visualmente');
        },
        error => {
          console.error('Error al eliminar la vista:', error);
        }
      );
    }
  }

  // Resetea el formulario para agregar o editar una nueva vista
  resetForm(): void {
    this.vistaForm.reset({
      id: 0,
      nombre: '',
      descripcion: '',
      ruta: '',
      moduloId: null,
      state: true
    });
    this.isEditing = false;
  }
}
