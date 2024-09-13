import { Component, OnInit } from '@angular/core';
import { ModuloService } from '../../Services/modulo.service';
import { Modulo } from '../../models/modulo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modulo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})
export class ModuloComponent implements OnInit {
  modulos: Modulo[] = [];
  selectedModulo: Modulo = {
    id: 0,
    nombre: '',
    ruta: '',
    icono: '',
    state: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: undefined
  };
  isEditing: boolean = false;
  duplicateNameError: boolean = false; // Bandera para mostrar alerta

  // Lista de íconos disponibles
  iconos = [
    { id: 1, name: 'Home', class: 'fa fa-home' },
    { id: 2, name: 'Usuario', class: 'fa fa-user' },
    { id: 3, name: 'Configuración', class: 'fa fa-cog' },
    { id: 4, name: 'Gráfico', class: 'fa fa-chart-bar' },
    { id: 5, name: 'Libro', class: 'fa fa-book' },
    { id: 6, name: 'Comentarios', class: 'fa fa-comments' },
    { id: 7, name: 'Correo', class: 'fa fa-envelope' },
    { id: 8, name: 'Notificación', class: 'fa fa-bell' },
    { id: 9, name: 'Seguridad', class: 'fa fa-shield-alt' },
    { id: 10, name: 'Operacional', class: 'fa fa-tachometer-alt' },
    { id: 11, name: 'Parametrización', class: 'fa fa-cogs' },
    { id: 12, name: 'Edificio', class: 'fa fa-building' },
    { id: 13, name: 'Ubicación', class: 'fa fa-map-marker-alt' }
  ];
  
  selectedIcon: { id: number, name: string, class: string } = this.iconos[0];

  constructor(private moduloService: ModuloService) {}

  ngOnInit(): void {
    this.getModulos();
  }

  getModulos(): void {
    this.moduloService.getModulos().subscribe(data => {
      this.modulos = data.filter(modulo => !modulo.deletedAt);
      console.log('Modulos obtenidos:', this.modulos); // Verifica los datos en la consola
    }, error => {
      console.error('Error al obtener los módulos:', error);
    });
  }

  onSubmit(): void {
    const duplicateModulo = this.modulos.find(modulo => modulo.nombre.toLowerCase() === this.selectedModulo.nombre.toLowerCase());

    if (duplicateModulo) {
      this.duplicateNameError = true;
      return;
    } else {
      this.duplicateNameError = false;
    }

    if (this.isEditing) {
      this.updateModulo(this.selectedModulo);
    } else {
      this.createModulo();
    }
  }

  createModulo(): void {
    this.selectedModulo.icono = this.selectedIcon.class;
  
    this.selectedModulo.createdAt = new Date().toISOString();
    this.selectedModulo.updatedAt = new Date().toISOString();
    this.selectedModulo.deletedAt = undefined;
  
    this.moduloService.createModulo(this.selectedModulo).subscribe(
      (response: Modulo) => {
        console.log('Módulo creado con éxito:', response);
        this.getModulos();
        this.resetForm();
      },
      (error) => {
        console.error('Error al crear el módulo:', error);
      }
    );
  }

  editModulo(modulo: Modulo): void {
    this.selectedModulo = { ...modulo };
    this.selectedIcon = this.iconos.find(icon => icon.class === modulo.icono) || this.iconos[0];
    this.isEditing = true;
  }

  updateModulo(modulo: Modulo): void {
    modulo.icono = this.selectedIcon.class;
    modulo.updatedAt = new Date().toISOString();
  
    this.moduloService.updateModulo(modulo).subscribe(
      (response: Modulo) => {
        console.log('Módulo actualizado con éxito:', response);
        this.getModulos();
        this.resetForm();
        this.isEditing = false;
      },
      (error) => {
        console.error('Error al actualizar el módulo:', error);
      }
    );
  }

  deleteModulo(id: number): void {
    const moduloToDelete = this.modulos.find(modulo => modulo.id === id);
    if (moduloToDelete) {
      moduloToDelete.deletedAt = new Date().toISOString();
      this.moduloService.updateModulo(moduloToDelete).subscribe(() => {
        console.log('Módulo eliminado con éxito (soft delete)');
        this.getModulos();
      }, error => {
        console.error('Error al eliminar el módulo:', error);
      });
    }
  }

  resetForm(): void {
    this.selectedModulo = {
      id: 0,
      nombre: '',
      ruta: '',
      icono: '',
      state: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      deletedAt: undefined
    };
    this.selectedIcon = this.iconos[0];
    this.isEditing = false;
    this.duplicateNameError = false;
  }
}
