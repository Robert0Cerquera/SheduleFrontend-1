import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true, // Hacer el componente standalone
  imports: [CommonModule], 
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() headers: { title: string; field: string }[] = []; // Cabeceras y campos de los datos
  @Input() data: any[] = []; // Datos a mostrar en la tabla
  @Output() edit = new EventEmitter<any>(); // Emite un evento al hacer clic en "Editar"
  @Output() delete = new EventEmitter<number>(); // Emite un evento al hacer clic en "Eliminar"

  onEdit(item: any): void {
    this.edit.emit(item);
  }

  onDelete(id: number): void {
    this.delete.emit(id);
  }

  getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((value, key) => value && value[key], obj);
  }
}
