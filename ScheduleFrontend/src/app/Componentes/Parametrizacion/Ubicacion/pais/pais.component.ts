import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisService } from '../../../../Services/Parameter/Ubicacion/pais.service';
import { ContinenteService } from '../../../../Services/Parameter/Ubicacion/continente.service';
import { Pais } from '../../../../models/M-Parameter/Ubicacion/pais';
import { Continente } from '../../../../models/M-Parameter/Ubicacion/continente';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TableComponent } from '../../../Pages/table/table.component';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  paises: Pais[] = [];
  continentes: Continente[] = [];
  paisForm!: FormGroup; // Formulario reactivo
  isEditing: boolean = false;
  headers = [
    { title: 'Nombre', field: 'nombre' },
    { title: 'Código', field: 'codigo' },
    { title: 'Continente', field: 'continenteId.nombre' },
    { title: 'Estado', field: 'state' }
  ];

  constructor(
    private fb: FormBuilder,
    private paisService: PaisService,
    private continenteService: ContinenteService
  ) {}

  ngOnInit(): void {
    this.getPaises();
    this.getContinentes();
    this.initializeForm();
  }

  initializeForm(): void {
    this.paisForm = this.fb.group({
      id: [0],
      nombre: ['', Validators.required],
      codigo: ['', Validators.required],
      continenteId: this.fb.group({
        id: [null, Validators.required]
      }),
      state: [true],
      createdAt: [''],  
      updatedAt: ['']   
    });
  }
   

  // Obtiene la lista de países sin eliminar
  getPaises(): void {
    this.paisService.getPaisSinEliminar().subscribe(
      data => {
        this.paises = data;
      },
      error => {
        console.error('Error al obtener los países:', error);
      }
    );
  }

  // Obtiene la lista de continentes sin eliminar
  getContinentes(): void {
    this.continenteService.getContinentesSinEliminar().subscribe(
      data => {
        this.continentes = data.map(continente => ({
          ...continente,
          nombreCompleto: `${continente.nombre} (${continente.state ? 'Activo' : 'Inactivo'})`
        }));
      },
      error => {
        console.error('Error al obtener los continentes:', error);
      }
    );
  }

  // Envía el formulario
  onSubmit(): void {
    if (this.paisForm.valid) {
      const pais: Pais = this.paisForm.value;
      if (this.isEditing) {
        this.updatePais(pais);
      } else {
        this.createPais(pais);
      }
    }
  }

  // Crea un nuevo país
  createPais(pais: Pais): void {
    pais.createdAt = new Date().toISOString();
    pais.updatedAt = new Date().toISOString();

    this.paisService.createPais(pais).subscribe(
      response => {
        console.log('País creado con éxito:', response);
        this.getPaises();
        this.resetForm();
      },
      error => {
        console.error('Error al crear el país:', error);
      }
    );
  }

  updatePais(pais: Pais): void {
    const updatedPais: Pais = {
      ...pais,
      updatedAt: new Date().toISOString() 
    };
  
    this.paisService.updatePais(updatedPais).subscribe(
      response => {
        console.log('País actualizado con éxito:', response);
        this.getPaises();
        this.resetForm();
        this.isEditing = false;
      },
      error => {
        console.error('Error al actualizar el país:', error);
      }
    );
  }
  


  editPais(pais: Pais): void {
    this.isEditing = true;
    this.paisForm.patchValue({
      id: pais.id,
      nombre: pais.nombre,
      codigo: pais.codigo,
      continenteId: {
        id: pais.continenteId?.id || null
      },
      state: pais.state,
      createdAt: pais.createdAt,  
      updatedAt: pais.updatedAt   
    });
  }
  

  // Elimina (visualmente) un país estableciendo la fecha de eliminación
  deletePais(id: number): void {
    const paisToDelete = this.paises.find(pais => pais.id === id);
    if (paisToDelete) {
      paisToDelete.deletedAt = new Date().toISOString();
      this.paisService.updatePais(paisToDelete).subscribe(
        () => {
          this.paises = this.paises.filter(pais => pais.id !== id);
          console.log('País eliminado visualmente');
        },
        error => {
          console.error('Error al eliminar el país:', error);
        }
      );
    }
  }

  // Resetea el formulario para agregar o editar un nuevo país
  resetForm(): void {
    this.paisForm.reset({
      id: 0,
      nombre: '',
      codigo: '',
      continenteId: null,
      state: true
    });
    this.isEditing = false;
  }
}
