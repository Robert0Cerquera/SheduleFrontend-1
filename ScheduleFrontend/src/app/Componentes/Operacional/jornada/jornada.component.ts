import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JornadaService } from '../../Services/Operacional/jornada.service';
import { Jornada } from '../../models/M-Operacional/jornada';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TableComponent } from '../../Componentes/table/table.component';

@Component({
  selector: 'app-jornada',
  standalone: true,
  imports: [ReactiveFormsModule, NgSelectModule, TableComponent],
  templateUrl: './jornada.component.html',
  styleUrls: ['./jornada.component.css']
})
export class JornadaComponent implements OnInit {
  jornadas: Jornada[] = [];
  jornadaForm!: FormGroup; // Formulario reactivo
  isEditing: boolean = false;
  headers = [
    { title: 'Código', field: 'codigo' },
    { title: 'Nombre', field: 'nombre' },
    { title: 'Estado', field: 'state' }
  ];

  constructor(
    private fb: FormBuilder,
    private jornadaService: JornadaService
  ) {}

  ngOnInit(): void {
    this.getJornadas();
    this.initializeForm();
  }

  // Inicializa el formulario reactivo
  initializeForm(): void {
    this.jornadaForm = this.fb.group({
      id: [0],
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      state: [true],
      createdAt: [''],
      updatedAt: ['']
    });
  }

  // Obtiene la lista de jornadas sin eliminar
  getJornadas(): void {
    this.jornadaService.getJornadasSinEliminar().subscribe(
      data => {
        this.jornadas = data;
      },
      error => {
        console.error('Error al obtener las jornadas:', error);
      }
    );
  }

  // Envía el formulario
  onSubmit(): void {
    if (this.jornadaForm.valid) {
      const jornada: Jornada = this.jornadaForm.value;
      if (this.isEditing) {
        this.updateJornada(jornada);
      } else {
        this.createJornada(jornada);
      }
    }
  }

  // Crea una nueva jornada
  createJornada(jornada: Jornada): void {
    this.jornadaService.createJornada(jornada).subscribe(
      response => {
        console.log('Jornada creada con éxito:', response);
        this.getJornadas();
        this.resetForm();
      },
      error => {
        console.error('Error al crear la jornada:', error);
      }
    );
  }

  // Actualiza una jornada existente
  updateJornada(jornada: Jornada): void {
    const updatedJornada: Jornada = {
      ...jornada,
      updatedAt: new Date().toISOString() // Actualiza la fecha de actualización
    };

    this.jornadaService.updateJornada(updatedJornada).subscribe(
      response => {
        console.log('Jornada actualizada con éxito:', response);
        this.getJornadas();
        this.resetForm();
        this.isEditing = false;
      },
      error => {
        console.error('Error al actualizar la jornada:', error);
      }
    );
  }

  // Edita una jornada seleccionada
  editJornada(jornada: Jornada): void {
    this.isEditing = true;
    this.jornadaForm.patchValue({
      id: jornada.id,
      codigo: jornada.codigo,
      nombre: jornada.nombre,
      state: jornada.state,
      createdAt: jornada.createdAt,
      updatedAt: jornada.updatedAt
    });
  }

  // Elimina (visualmente) una jornada estableciendo la fecha de eliminación
  deleteJornada(id: number): void {
    const jornadaToDelete = this.jornadas.find(jornada => jornada.id === id);
    if (jornadaToDelete) {
      jornadaToDelete.deletedAt = new Date().toISOString();
      this.jornadaService.updateJornada(jornadaToDelete).subscribe(
        () => {
          this.jornadas = this.jornadas.filter(jornada => jornada.id !== id);
          console.log('Jornada eliminada visualmente');
        },
        error => {
          console.error('Error al eliminar la jornada:', error);
        }
      );
    }
  }

  // Resetea el formulario para agregar o editar una nueva jornada
  resetForm(): void {
    this.jornadaForm.reset({
      id: 0,
      codigo: '',
      nombre: '',
      state: true
    });
    this.isEditing = false;
  }
}
