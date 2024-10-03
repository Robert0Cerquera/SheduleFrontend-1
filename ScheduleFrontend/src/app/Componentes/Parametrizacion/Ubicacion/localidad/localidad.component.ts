import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalidadService } from '../../../../Services/Parameter/Ubicacion/localidad.service';
import { CiudadService } from '../../../../Services/Parameter/Ubicacion/ciudad.service';
import { Localidad } from '../../../../models/M-Parameter/Ubicacion/localidad';
import { Ciudad } from '../../../../models/M-Parameter/Ubicacion/ciudad';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TableComponent } from '../../../Pages/table/table.component';

@Component({
  selector: 'app-localidad',
  templateUrl: './localidad.component.html',
  styleUrls: ['./localidad.component.css']
})
export class LocalidadComponent implements OnInit {
  localidades: Localidad[] = [];
  ciudades: Ciudad[] = [];
  localidadForm!: FormGroup; // Formulario reactivo
  isEditing: boolean = false;
  headers = [
    { title: 'Nombre', field: 'nombre' },
    { title: 'Código Postal', field: 'codigoPostal' },
    { title: 'Ciudad', field: 'ciudadId.nombre' },
    { title: 'Estado', field: 'state' }
  ];

  constructor(
    private fb: FormBuilder,
    private localidadService: LocalidadService,
    private ciudadService: CiudadService
  ) {}

  ngOnInit(): void {
    this.getLocalidades();
    this.getCiudades();
    this.initializeForm();
  }

  // Inicializa el formulario reactivo
  initializeForm(): void {
    this.localidadForm = this.fb.group({
      id: [0],
      nombre: ['', Validators.required],
      codigoPostal: [0, Validators.required],
      ciudadId: this.fb.group({
        id: [null, Validators.required]
      }),
      state: [true],
      createdAt: [''],
      updatedAt: ['']
    });
  }

  // Obtiene la lista de localidades sin eliminar
  getLocalidades(): void {
    this.localidadService.getLocalidadesSinEliminar().subscribe(
      data => {
        this.localidades = data;
      },
      error => {
        console.error('Error al obtener las localidades:', error);
      }
    );
  }

  // Obtiene la lista de ciudades sin eliminar
  getCiudades(): void {
    this.ciudadService.getCiudadesSinEliminar().subscribe(
      data => {
        this.ciudades = data.map(ciudad => ({
          ...ciudad,
          nombreCompleto: `${ciudad.nombre} (${ciudad.state ? 'Activo' : 'Inactivo'})`
        }));
      },
      error => {
        console.error('Error al obtener las ciudades:', error);
      }
    );
  }

  // Envía el formulario
  onSubmit(): void {
    if (this.localidadForm.valid) {
      const localidad: Localidad = this.localidadForm.value;
      if (this.isEditing) {
        this.updateLocalidad(localidad);
      } else {
        this.createLocalidad(localidad);
      }
    }
  }

  // Crea una nueva localidad
  createLocalidad(localidad: Localidad): void {
    this.localidadService.createLocalidad(localidad).subscribe(
      response => {
        console.log('Localidad creada con éxito:', response);
        this.getLocalidades();
        this.resetForm();
      },
      error => {
        console.error('Error al crear la localidad:', error);
      }
    );
  }

  // Actualiza una localidad existente
  updateLocalidad(localidad: Localidad): void {
    const updatedLocalidad: Localidad = {
      ...localidad,
      updatedAt: new Date().toISOString()
    };

    this.localidadService.updateLocalidad(updatedLocalidad).subscribe(
      response => {
        console.log('Localidad actualizada con éxito:', response);
        this.getLocalidades();
        this.resetForm();
        this.isEditing = false;
      },
      error => {
        console.error('Error al actualizar la localidad:', error);
      }
    );
  }

  // Edita una localidad seleccionada
  editLocalidad(localidad: Localidad): void {
    this.isEditing = true;
    this.localidadForm.patchValue({
      id: localidad.id,
      nombre: localidad.nombre,
      codigoPostal: localidad.codigoPostal,
      ciudadId: {
        id: localidad.ciudadId?.id || null
      },
      state: localidad.state,
      createdAt: localidad.createdAt,
      updatedAt: localidad.updatedAt
    });
  }

  // Elimina (visualmente) una localidad estableciendo la fecha de eliminación
  deleteLocalidad(id: number): void {
    const localidadToDelete = this.localidades.find(localidad => localidad.id === id);
    if (localidadToDelete) {
      localidadToDelete.deletedAt = new Date().toISOString();
      this.localidadService.updateLocalidad(localidadToDelete).subscribe(
        () => {
          this.localidades = this.localidades.filter(localidad => localidad.id !== id);
          console.log('Localidad eliminada visualmente');
        },
        error => {
          console.error('Error al eliminar la localidad:', error);
        }
      );
    }
  }

  // Resetea el formulario para agregar o editar una nueva localidad
  resetForm(): void {
    this.localidadForm.reset({
      id: 0,
      nombre: '',
      codigoPostal: 0,
      ciudadId: null,
      state: true
    });
    this.isEditing = false;
  }
}
