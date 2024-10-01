import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CiudadService } from '../../../Services/Parameter/Ubicacion/ciudad.service';
import { DepartamentoService } from '../../../Services/Parameter/Ubicacion/departamento.service';
import { Ciudad } from '../../../models/M-Parameter/Ubicacion/ciudad';
import { Departamento } from '../../../models/M-Parameter/Ubicacion/departamento';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TableComponent } from '../../../Componentes/table/table.component';

@Component({
  selector: 'app-ciudad',
  standalone: true,
  imports: [ReactiveFormsModule, NgSelectModule, TableComponent],
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {
  ciudades: Ciudad[] = [];
  departamentos: Departamento[] = [];
  ciudadForm!: FormGroup; // Formulario reactivo
  isEditing: boolean = false;
  headers = [
    { title: 'Nombre', field: 'nombre' },
    { title: 'Código', field: 'codigo' },
    { title: 'Departamento', field: 'departamentoId.nombre' },
    { title: 'Estado', field: 'state' }
  ];

  constructor(
    private fb: FormBuilder,
    private ciudadService: CiudadService,
    private departamentoService: DepartamentoService
  ) { }

  ngOnInit(): void {
    this.getCiudades();
    this.getDepartamentos();
    this.initializeForm();
  }

 // Inicializa el formulario reactivo
initializeForm(): void {
  this.ciudadForm = this.fb.group({
    id: [0],
    nombre: ['', Validators.required],
    codigo: ['', Validators.required],
    departamentoId: this.fb.group({
      id: [null, Validators.required]
    }),
    state: [true],
    createdAt: [''],  // Añadir createdAt al formulario, aunque no sea visible
    updatedAt: ['']   // Añadir updatedAt también si quieres mantenerlo
  });
}

  // Obtiene la lista de ciudades sin eliminar
  getCiudades(): void {
    this.ciudadService.getCiudadesSinEliminar().subscribe(
      data => {
        this.ciudades = data;
      },
      error => {
        console.error('Error al obtener las ciudades:', error);
      }
    );
  }

  // Obtiene la lista de departamentos sin eliminar
  getDepartamentos(): void {
    this.departamentoService.getDepartamentosSinEliminar().subscribe(
      data => {
        this.departamentos = data.map(departamento => ({
          ...departamento,
          nombreCompleto: `${departamento.nombre} (${departamento.state ? 'Activo' : 'Inactivo'})`
        }));
      },
      error => {
        console.error('Error al obtener los departamentos:', error);
      }
    );
  }

  // Envía el formulario
  onSubmit(): void {
    if (this.ciudadForm.valid) {
      const ciudad: Ciudad = this.ciudadForm.value;
      if (this.isEditing) {
        this.updateCiudad(ciudad);
      } else {
        this.createCiudad(ciudad);
      }
    }
  }

  // Crea una nueva ciudad
  createCiudad(ciudad: Ciudad): void {
    this.ciudadService.createCiudad(ciudad).subscribe(
      response => {
        console.log('Ciudad creada con éxito:', response);
        this.getCiudades();
        this.resetForm();
      },
      error => {
        console.error('Error al crear la ciudad:', error);
      }
    );
  }

  updateCiudad(ciudad: Ciudad): void {
    const updatedCiudad: Ciudad = {
      ...ciudad,
      updatedAt: new Date().toISOString() // Actualiza la fecha de actualización
    };
  
    this.ciudadService.updateCiudad(updatedCiudad).subscribe(
      response => {
        console.log('Ciudad actualizada con éxito:', response);
        this.getCiudades();
        this.resetForm();
        this.isEditing = false;
      },
      error => {
        console.error('Error al actualizar la ciudad:', error);
      }
    );
  }
  

  editCiudad(ciudad: Ciudad): void {
    this.isEditing = true;
    this.ciudadForm.patchValue({
      id: ciudad.id,
      nombre: ciudad.nombre,
      codigo: ciudad.codigo,
      departamentoId: {
        id: ciudad.departamentoId?.id || null
      },
      state: ciudad.state,
      createdAt: ciudad.createdAt,  // Mantén el valor original de createdAt
      updatedAt: ciudad.updatedAt   // Mantén el valor original de updatedAt
    });
  }
  


  // Elimina (visualmente) una ciudad estableciendo la fecha de eliminación
  deleteCiudad(id: number): void {
    const ciudadToDelete = this.ciudades.find(ciudad => ciudad.id === id);
    if (ciudadToDelete) {
      ciudadToDelete.deletedAt = new Date().toISOString();
      this.ciudadService.updateCiudad(ciudadToDelete).subscribe(
        () => {
          this.ciudades = this.ciudades.filter(ciudad => ciudad.id !== id);
          console.log('Ciudad eliminada visualmente');
        },
        error => {
          console.error('Error al eliminar la ciudad:', error);
        }
      );
    }
  }

  // Resetea el formulario para agregar o editar una nueva ciudad
  resetForm(): void {
    this.ciudadForm.reset({
      id: 0,
      nombre: '',
      codigo: '',
      departamentoId: null,
      state: true
    });
    this.isEditing = false;
  }
}
