import { Component, OnInit } from '@angular/core';
import { VistaService } from '../../Services/vista.service'; // Asegúrate de que la ruta al servicio sea correcta
import { Vista } from '../../models/vista'; // Asegúrate de que la ruta al modelo sea correcta
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {
  vistas: Vista[] = [];
  selectedVista: Vista = {
    id: 0,
    nombre: '',
    descripcion: '',
    ruta: '',
    moduloId: 0, // Ajusta según el tipo de `moduloId`
    state: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: undefined
  };
  isEditing: boolean = false;
  duplicateNameError: boolean = false;

  constructor(private vistaService: VistaService) {}

  ngOnInit(): void {
    this.getVistas();
  }

  getVistas(): void {
    this.vistaService.getVistas().subscribe(data => {
      // Filtra solo las vistas que no tienen deletedAt
      this.vistas = data.filter(vista => !vista.deletedAt);
    }, error => {
      console.error('Error al obtener las vistas:', error);
    });
  }

  onSubmit(): void {
    // Verificar si el nombre de la vista ya existe
    const duplicateVista = this.vistas.find(vista => vista.nombre.toLowerCase() === this.selectedVista.nombre.toLowerCase());
    
    if (duplicateVista) {
      this.duplicateNameError = true; // Muestra la alerta
      return;
    } else {
      this.duplicateNameError = false;
    }

    if (this.isEditing) {
      this.updateVista(this.selectedVista);
    } else {
      this.createVista();
    }
  }

  createVista(): void {
    this.selectedVista.createdAt = new Date().toISOString();
    this.selectedVista.updatedAt = new Date().toISOString();
    this.selectedVista.deletedAt = undefined;

    this.vistaService.createVista(this.selectedVista).subscribe(
      (response: Vista) => {
        console.log('Vista creada con éxito:', response);
        this.getVistas(); // Refresca la lista después de crear
        this.resetForm(); // Limpia el formulario después de crear
      },
      (error) => {
        console.error('Error al crear la vista:', error);
      }
    );
  }

  editVista(vista: Vista): void {
    this.selectedVista = { ...vista };
    this.isEditing = true;
  }

  updateVista(vista: Vista): void {
    vista.updatedAt = new Date().toISOString(); // Asegúrate de actualizar el timestamp

    this.vistaService.updateVista(vista).subscribe(
      (response: Vista) => {
        console.log('Vista actualizada con éxito:', response);
        this.getVistas(); // Refresca la lista después de actualizar
        this.resetForm(); // Limpia el formulario después de actualizar
        this.isEditing = false;
      },
      (error) => {
        console.error('Error al actualizar la vista:', error);
      }
    );
  }

  deleteVista(id: number): void {
    const vistaToDelete = this.vistas.find(vista => vista.id === id);
    if (vistaToDelete) {
      vistaToDelete.deletedAt = new Date().toISOString(); // Marca como eliminado con la fecha actual
      this.vistaService.updateVista(vistaToDelete).subscribe(() => {
        console.log('Vista eliminada con éxito (soft delete)');
        this.getVistas(); // Refresca la lista después de eliminar
      }, error => {
        console.error('Error al eliminar la vista:', error);
      });
    }
  }

  resetForm(): void {
    this.selectedVista = {
      id: 0,
      nombre: '',
      descripcion: '',
      ruta: '',
      moduloId: 0, // Ajusta según el tipo de `moduloId`
      state: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      deletedAt: undefined
    };
    this.isEditing = false;
  }
}
