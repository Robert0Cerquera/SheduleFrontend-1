import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegionalService } from '../../../../Services/Parameter/Infraestructura/regional.service';
import { Regional } from '../../../../models/M-Parameter/infraestructura/regional';

@Component({
  selector: 'app-regional',
  templateUrl: './regional.component.html',
  styleUrls: ['./regional.component.css']
})
export class RegionalComponent implements OnInit {
  regionales: Regional[] = [];
  regionalForm!: FormGroup;
  isEditing: boolean = false;
  headers = [
    { title: 'NIT', field: 'nit' },
    { title: 'Nombre', field: 'nombre' },
    { title: 'Acrónimo', field: 'acronimo' },
    { title: 'Dirección', field: 'direccion' },
    { title: 'Teléfono', field: 'telefono' },
    { title: 'Estado', field: 'state' }
  ];

  constructor(
    private fb: FormBuilder,
    private regionalService: RegionalService
  ) {}

  ngOnInit(): void {
    this.getRegionales();
    this.initializeForm();
  }

  initializeForm(): void {
    this.regionalForm = this.fb.group({
      id: [0],
      nit: ['', Validators.required],
      nombre: ['', Validators.required],
      acronimo: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      state: [true],
      createdAt: [''],
      updatedAt: ['']
    });
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
    if (this.regionalForm.valid) {
      const regional: Regional = this.regionalForm.value;
      if (this.isEditing) {
        this.updateRegional(regional);
      } else {
        this.createRegional(regional);
      }
    }
  }

  createRegional(regional: Regional): void {
    regional.createdAt = new Date().toISOString();
    regional.updatedAt = new Date().toISOString();

    this.regionalService.createRegional(regional).subscribe(
      response => {
        console.log('Regional creada con éxito:', response);
        this.getRegionales();
        this.resetForm();
      },
      error => {
        console.error('Error al crear la regional:', error);
      }
    );
  }

  updateRegional(regional: Regional): void {
    const updatedRegional: Regional = {
      ...regional,
      updatedAt: new Date().toISOString()
    };

    this.regionalService.updateRegional(updatedRegional).subscribe(
      response => {
        console.log('Regional actualizada con éxito:', response);
        this.getRegionales();
        this.resetForm();
        this.isEditing = false;
      },
      error => {
        console.error('Error al actualizar la regional:', error);
      }
    );
  }

  editRegional(regional: Regional): void {
    this.isEditing = true;
    this.regionalForm.patchValue({
      id: regional.id,
      nit: regional.nit,
      nombre: regional.nombre,
      acronimo: regional.acronimo,
      direccion: regional.direccion,
      telefono: regional.telefono,
      state: regional.state,
      createdAt: regional.createdAt,
      updatedAt: regional.updatedAt
    });
  }

  deleteRegional(id: number): void {
    const regionalToDelete = this.regionales.find(reg => reg.id === id);
    if (regionalToDelete) {
      regionalToDelete.deletedAt = new Date().toISOString();
      this.regionalService.updateRegional(regionalToDelete).subscribe(
        () => {
          console.log('Regional eliminada visualmente');
          this.getRegionales();
        },
        error => {
          console.error('Error al eliminar la regional:', error);
        }
      );
    }
  }

  resetForm(): void {
    this.regionalForm.reset({
      id: 0,
      nit: '',
      nombre: '',
      acronimo: '',
      direccion: '',
      telefono: '',
      state: true
    });
    this.isEditing = false;
  }
}
