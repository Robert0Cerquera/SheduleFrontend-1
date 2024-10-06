import { Component, OnInit } from '@angular/core';
import { ContinenteService } from '../../../../Services/Parameter/Ubicacion/continente.service';
import { Continente } from '../../../../models/M-Parameter/Ubicacion/continente';


@Component({
  selector: 'app-continente',
  templateUrl: './continente.component.html',
  styleUrls: ['./continente.component.css']
})
export class ContinenteComponent implements OnInit {
  continentes: Continente[] = [];
  selectedContinente: Continente = {
    id: 0,
    nombre: '',
    codigo: '',
    state: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: undefined
  };
  isEditing: boolean = false;

  constructor(private continenteService: ContinenteService) {}

  ngOnInit(): void {
    this.getContinentes();
  }

  getContinentes(): void {
    this.continenteService.getContinentes().subscribe(data => {
      // Filtrar solo continentes que no han sido eliminados
      this.continentes = data.filter(continente => continente.deletedAt === null || continente.deletedAt === undefined);
    }, error => {
      console.error('Error al obtener los continentes:', error);
    });
  }

  onSubmit(): void {
    if (this.isEditing) {
      this.updateContinente();
    } else {
      this.createContinente();
    }
  }

  createContinente(): void {
    this.selectedContinente.createdAt = new Date().toISOString();
    this.selectedContinente.updatedAt = new Date().toISOString();
    this.continenteService.createContinente(this.selectedContinente).subscribe(
      response => {
        this.getContinentes();
        this.resetForm();
      },
      error => {
        console.error('Error al crear el continente:', error);
      }
    );
  }

  updateContinente(): void {
    this.selectedContinente.updatedAt = new Date().toISOString();
    this.continenteService.updateContinente(this.selectedContinente).subscribe(
      response => {
        this.getContinentes();
        this.resetForm();
        this.isEditing = false;
      },
      error => {
        console.error('Error al actualizar el continente:', error);
      }
    );
  }

  editContinente(continente: Continente): void {
    this.selectedContinente = { ...continente };
    this.isEditing = true;
  }

  deleteContinente(id: number): void {
    const continenteToDelete = this.continentes.find(continente => continente.id === id);
    if (continenteToDelete) {
      continenteToDelete.deletedAt = new Date().toISOString();
      this.continenteService.updateContinente(continenteToDelete).subscribe(() => {
        // Refrescar la lista de continentes visualmente sin el eliminado
        this.continentes = this.continentes.filter(continente => continente.id !== id);
        console.log('Continente eliminado visualmente');
      }, error => {
        console.error('Error al eliminar el continente:', error);
      });
    }
  }

  toggleEstado(continente: Continente): void {
    continente.state = !continente.state;
    continente.updatedAt = new Date().toISOString();
    this.continenteService.updateContinente(continente).subscribe(
      response => {
        console.log('Estado del continente actualizado', response);
      },
      error => {
        console.error('Error al actualizar el estado:', error);
      }
    );
  }

  resetForm(): void {
    this.selectedContinente = {
      id: 0,
      nombre: '',
      codigo: '',
      state: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      deletedAt: undefined
    };
    this.isEditing = false;
  }

}
