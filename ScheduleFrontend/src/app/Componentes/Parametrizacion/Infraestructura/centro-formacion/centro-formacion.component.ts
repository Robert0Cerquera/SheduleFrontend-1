import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CentroFormacionService } from '../../../../Services/Parameter/Infraestructura/centro-formacion.service';
import { RegionalService } from '../../../../Services/Parameter/Infraestructura/regional.service';
import { CentroFormacion } from '../../../../models/M-Parameter/infraestructura/centro-formacion';
import { Regional } from '../../../../models/M-Parameter/infraestructura/regional';

@Component({
  selector: 'app-centro-formacion',
  templateUrl: './centro-formacion.component.html',
  styleUrls: ['./centro-formacion.component.css']
})
export class CentroFormacionComponent implements OnInit {
  centrosFormacion: CentroFormacion[] = [];
  regionales: Regional[] = [];
  centroFormacionForm!: FormGroup;
  isEditing: boolean = false;
  headers = [
    { title: 'Nombre', field: 'nombre' },
    { title: 'Dirección', field: 'direccion' },
    { title: 'Teléfono', field: 'telefono' },
    { title: 'Regional', field: 'regionalId.nombre' },
    { title: 'Estado', field: 'state' }
  ];

  constructor(
    private fb: FormBuilder,
    private centroFormacionService: CentroFormacionService,
    private regionalService: RegionalService
  ) {}

  ngOnInit(): void {
    this.getCentrosFormacion();
    this.getRegionales();
    this.initializeForm();
  }

  initializeForm(): void {
    this.centroFormacionForm = this.fb.group({
      id: [0],
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      regionalId: this.fb.group({
        id: [null, Validators.required]
      }),
      state: [true],
      createdAt: [''],
      updatedAt: ['']
    });
  }

  getCentrosFormacion(): void {
    this.centroFormacionService.getCentrosFormacionSinEliminar().subscribe(
      data => {
        this.centrosFormacion = data;
      },
      error => {
        console.error('Error al obtener los centros de formación:', error);
      }
    );
  }

  getRegionales(): void {
    this.regionalService.getRegionalesSinEliminar().subscribe(
      data => {
        this.regionales = data;
      },
      error => {
        console.error('Error al obtener los regionales:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.centroFormacionForm.valid) {
      const centroFormacion: CentroFormacion = this.centroFormacionForm.value;
      if (this.isEditing) {
        this.updateCentroFormacion(centroFormacion);
      } else {
        this.createCentroFormacion(centroFormacion);
      }
    }
  }

  createCentroFormacion(centroFormacion: CentroFormacion): void {
    centroFormacion.createdAt = new Date().toISOString();
    centroFormacion.updatedAt = new Date().toISOString();

    this.centroFormacionService.createCentroFormacion(centroFormacion).subscribe(
      response => {
        console.log('Centro de formación creado con éxito:', response);
        this.getCentrosFormacion();
        this.resetForm();
      },
      error => {
        console.error('Error al crear el centro de formación:', error);
      }
    );
  }

  updateCentroFormacion(centroFormacion: CentroFormacion): void {
    const updatedCentroFormacion: CentroFormacion = {
      ...centroFormacion,
      updatedAt: new Date().toISOString()
    };

    this.centroFormacionService.updateCentroFormacion(updatedCentroFormacion).subscribe(
      response => {
        console.log('Centro de formación actualizado con éxito:', response);
        this.getCentrosFormacion();
        this.resetForm();
        this.isEditing = false;
      },
      error => {
        console.error('Error al actualizar el centro de formación:', error);
      }
    );
  }

  editCentroFormacion(centroFormacion: CentroFormacion): void {
    this.isEditing = true;
    this.centroFormacionForm.patchValue({
      id: centroFormacion.id,
      nombre: centroFormacion.nombre,
      direccion: centroFormacion.direccion,
      telefono: centroFormacion.telefono,
      regionalId: {
        id: centroFormacion.regionalId?.id || null
      },
      state: centroFormacion.state,
      createdAt: centroFormacion.createdAt,
      updatedAt: centroFormacion.updatedAt
    });
  }

  deleteCentroFormacion(id: number): void {
    const centroToDelete = this.centrosFormacion.find(centro => centro.id === id);
    if (centroToDelete) {
      centroToDelete.deletedAt = new Date().toISOString();
      this.centroFormacionService.updateCentroFormacion(centroToDelete).subscribe(
        () => {
          console.log('Centro de formación eliminado visualmente');
          this.getCentrosFormacion();
        },
        error => {
          console.error('Error al eliminar el centro de formación:', error);
        }
      );
    }
  }

  resetForm(): void {
    this.centroFormacionForm.reset({
      id: 0,
      nombre: '',
      direccion: '',
      telefono: '',
      regionalId: { id: null },
      state: true
    });
    this.isEditing = false;
  }
}
