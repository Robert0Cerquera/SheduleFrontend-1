import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartamentoService } from '../../../../Services/Parameter/Ubicacion/departamento.service';
import { PaisService } from '../../../../Services/Parameter/Ubicacion/pais.service';
import { Departamento } from '../../../../models/M-Parameter/Ubicacion/departamento';
import { Pais } from '../../../../models/M-Parameter/Ubicacion/pais';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TableComponent } from '../../../Pages/table/table.component';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {
  departamentos: Departamento[] = [];
  paises: Pais[] = [];
  departamentoForm!: FormGroup; // Formulario reactivo
  isEditing: boolean = false;
  headers = [
    { title: 'Nombre', field: 'nombre' },
    { title: 'Código', field: 'codigo' },
    { title: 'Pais', field: 'paisId.nombre' },
    { title: 'Estado', field: 'state' }
  ];

  constructor(
    private fb: FormBuilder,
    private departamentoService: DepartamentoService,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.getDepartamentos();
    this.getPaises();
    this.initializeForm();
  }

  // Inicializa el formulario reactivo
  initializeForm(): void {
    this.departamentoForm = this.fb.group({
      id: [0],
      nombre: ['', Validators.required],
      codigo: ['', Validators.required],
      paisId: this.fb.group({
        id: [null, Validators.required]
      }),
      state: [true],
      createdAt: [''],  // Añadir createdAt al formulario
      updatedAt: ['']   // Añadir updatedAt al formulario
    });
  }
  

  // Obtiene la lista de departamentos sin eliminar
  getDepartamentos(): void {
    this.departamentoService.getDepartamentosSinEliminar().subscribe(
      data => {
        this.departamentos = data;
      },
      error => {
        console.error('Error al obtener los departamentos:', error);
      }
    );
  }

  // Obtiene la lista de países sin eliminar
  getPaises(): void {
    this.paisService.getPaisSinEliminar().subscribe(
      data => {
        this.paises = data.map(pais=>({
          ...pais,
          nombreCompleto:`${pais.nombre} (${pais.state ? 'Activo' : 'Inactivo'})` 
        }))
      },
      error => {
        console.error('Error al obtener los países:', error);
      }
    );
  }

  // Envía el formulario
  onSubmit(): void {
    if (this.departamentoForm.valid) {
      const departamento: Departamento = this.departamentoForm.value;
      if (this.isEditing) {
        this.updateDepartamento(departamento);
      } else {
        this.createDepartamento(departamento);
      }
    }
  }

  // Crea un nuevo departamento
  createDepartamento(departamento: Departamento): void {
    this.departamentoService.createDepartamento(departamento).subscribe(
      response => {
        console.log('Departamento creado con éxito:', response);
        this.getDepartamentos();
        this.resetForm();
      },
      error => {
        console.error('Error al crear el departamento:', error);
      }
    );
  }

  // Actualiza un departamento existente
  updateDepartamento(departamento: Departamento): void {
    const updatedDepartamento: Departamento = {
      ...departamento,
      updatedAt: new Date().toISOString() // Actualiza la fecha de actualización
    };
  
    this.departamentoService.updateDepartamento(updatedDepartamento).subscribe(
      response => {
        console.log('Departamento actualizado con éxito:', response);
        this.getDepartamentos();
        this.resetForm();
        this.isEditing = false;
      },
      error => {
        console.error('Error al actualizar el departamento:', error);
      }
    );
  }
  

  // Edita un departamento seleccionado
  editDepartamento(departamento: Departamento): void {
    this.isEditing = true;
    this.departamentoForm.patchValue({
      id: departamento.id,
      nombre: departamento.nombre,
      codigo: departamento.codigo,
      paisId: {
        id: departamento.paisId?.id || null
      },
      state: departamento.state,
      createdAt: departamento.createdAt,  // Mantén el valor de createdAt
      updatedAt: departamento.updatedAt   // Mantén el valor de updatedAt
    });
  }
  
  deleteDepartamento(id: number): void {
    const departamentoToDelete = this.departamentos.find(departamento => departamento.id === id);
    if (departamentoToDelete) {
      departamentoToDelete.deletedAt = new Date().toISOString();
      this.departamentoService.updateDepartamento(departamentoToDelete).subscribe(
        () => {
          this.departamentos = this.departamentos.filter(departamento => departamento.id !== id);
          console.log('Departamento eliminado visualmente');
        },
        error => {
          console.error('Error al eliminar el departamento:', error);
        }
      );
    }
  }
  

  // Resetea el formulario para agregar o editar un nuevo departamento
  resetForm(): void {
    this.departamentoForm.reset({
      id: 0,
      nombre: '',
      codigo: '',
      paisId: null,
      state: true
    });
    this.isEditing = false;
  }
}
