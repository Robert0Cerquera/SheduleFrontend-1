import { Component, OnInit } from '@angular/core';
import { PermisosService } from '../../Services/permisos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  permisos: any[] = [];
  modulos: any[] = [];

  constructor(private permisosService: PermisosService) {}

  ngOnInit(): void {
    const usuario = 'juanpgm'; // Este dato debe ser dinámico, por ejemplo, obtenido del login
    this.permisosService.getPermisos(usuario).subscribe((data) => {
      this.permisos = data;
      this.organizarModulos();
    });
  }

  organizarModulos() {
    const modulosMap = new Map();

    this.permisos.forEach((permiso) => {
      if (!modulosMap.has(permiso.moduloNombre)) {
        modulosMap.set(permiso.moduloNombre, {
          nombre: permiso.moduloNombre,
          ruta: permiso.moduloRuta,
          icono: permiso.icono,
          vistas: []
        });
      }
      modulosMap.get(permiso.moduloNombre).vistas.push({
        nombre: permiso.vistaNombre,
        ruta: permiso.vistaRuta
      });
    });

    this.modulos = Array.from(modulosMap.values());
  }
}
