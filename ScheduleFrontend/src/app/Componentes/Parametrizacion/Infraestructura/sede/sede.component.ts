import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SedeService } from '../../../../Services/Parameter/Infraestructura/sede.service';
import { CentroFormacionService } from '../../../../Services/Parameter/Infraestructura/centro-formacion.service';
import { Sede } from '../../../../models/M-Parameter/infraestructura/sede';
import { CentroFormacion } from '../../../../models/M-Parameter/infraestructura/centro-formacion';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css']
})
export class SedeComponent implements OnInit {
  sedes: Sede[] = [];
  centrosFormacion: CentroFormacion[] = [];
  sedeForm!: FormGroup;
  isEditing: boolean = false;
  headers = [
    { title: 'Nombre', field: 'nombre' },
    { title: 'Código', field: 'codigo' },
    { title: 'Dirección', field: 'direccion' },
    { title: 'Centro de Formación', field: 'centroFormacionId.nombre' },
    { title: 'Estado', field: 'state' }
  ];

  constructor(
    private fb: FormBuilder,
    private sedeService: SedeService,
    private centroFormacionService: CentroFormacionService
  ) {}

  ngOnInit(): void {
    this.getSedes();
    this.getCentrosFormacion();
    this.initializeForm();
  }

  initializeForm(): void {
    this.sedeForm = this.fb.group({
      id: [0],
      nombre: ['', Validators.required],
      codigo: ['', Validators.required],
      direccion: ['', Validators.required],
      centroFormacionId: this.fb.group({
        id: [null, Validators.required]
      }),
      state: [true],
      createdAt: [''],
      updatedAt: ['']
    });
  }

  getSedes(): void {
    this.sedeService.getSedesSinEliminar().subscribe(
      data => {
        this.sedes = data;
      },
      error => {
        console.error('Error al obtener las sedes:', error);
      }
    );
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

  onSubmit(): void {
    if (this.sedeForm.valid) {
      const sede: Sede = this.sedeForm.value;
      if (this.isEditing) {
        this.updateSede(sede);
      } else {
        this.createSede(sede);
      }
    }
  }

  createSede(sede: Sede): void {
    sede.createdAt = new Date().toISOString();
    sede.updatedAt = new Date().toISOString();

    this.sedeService.createSede(sede).subscribe(
      response => {
        console.log('Sede creada con éxito:', response);
        this.getSedes();
        this.resetForm();
      },
      error => {
        console.error('Error al crear la sede:', error);
      }
    );
  }

  updateSede(sede: Sede): void {
    const updatedSede: Sede = {
      ...sede,
      updatedAt: new Date().toISOString()
    };

    this.sedeService.updateSede(updatedSede).subscribe(
      response => {
        console.log('Sede actualizada con éxito:', response);
        this.getSedes();
        this.resetForm();
        this.isEditing = false;
      },
      error => {
        console.error('Error al actualizar la sede:', error);
      }
    );
  }

  editSede(sede: Sede): void {
    this.isEditing = true;
    this.sedeForm.patchValue({
      id: sede.id,
      nombre: sede.nombre,
      codigo: sede.codigo,
      direccion: sede.direccion,
      centroFormacionId: {
        id: sede.centroFormacionId?.id || null
      },
      state: sede.state,
      createdAt: sede.createdAt,
      updatedAt: sede.updatedAt
    });
  }

  deleteSede(id: number): void {
    const sedeToDelete = this.sedes.find(sede => sede.id === id);
    if (sedeToDelete) {
      sedeToDelete.deletedAt = new Date().toISOString();
      this.sedeService.updateSede(sedeToDelete).subscribe(
        () => {
          console.log('Sede eliminada visualmente');
          this.getSedes();
        },
        error => {
          console.error('Error al eliminar la sede:', error);
        }
      );
    }
  }

  resetForm(): void {
    this.sedeForm.reset({
      id: 0,
      nombre: '',
      codigo: '',
      direccion: '',
      centroFormacionId: { id: null },
      state: true
    });
    this.isEditing = false;
  }
}
