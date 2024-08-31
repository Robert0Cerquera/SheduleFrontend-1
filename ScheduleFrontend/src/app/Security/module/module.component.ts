import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../../Services/module.service';



@Component({
  selector: 'app-module',
  standalone: true,
  imports: [],
  templateUrl: './module.component.html',
  styleUrl: './module.component.css'
})
export class ModuleComponent {

 /* modules: any[] = [];

  constructor(private moduleService: ModuleService) {}

  ngOnInit(): void {
    this.loadModules();
  }

  loadModules(): void {
    this.moduleService.getModules().subscribe(data => {
      this.modules = data;
    });
  }

  addModule(name: string, description: string, code: string): void {
    const newModule = { name, description, code };
    this.moduleService.createModule(newModule).subscribe(module => {
      this.modules.push(module);
    });
  }

  updateModule(id: number, name: string, description: string, code: string): void {
    const updatedModule = { name, description, code };
    this.moduleService.updateModule(id, updatedModule).subscribe(() => {
      this.loadModules();
    });
  }

  deleteModule(id: number): void {
    this.moduleService.deleteModule(id).subscribe(() => {
      this.modules = this.modules.filter(module => module.id !== id);
    });
  } */
}
