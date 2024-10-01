import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaUsuarioService } from '../../Services/Security/persona-usuario.service';
import { Persona } from '../../models/M-Security/persona';
import { Usuario } from '../../models/M-Security/usuario';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-persona-usuario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './persona-usuario.component.html',
  styleUrls: ['./persona-usuario.component.css']
})
export class PersonaUsuarioComponent implements OnInit {
  personaUsuarioForm!: FormGroup;
  isEditing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private personaUsuarioService: PersonaUsuarioService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  // Inicializa el formulario reactivo
  initializeForm(): void {
    this.personaUsuarioForm = this.fb.group({
      id: [0],
      primerNombre: ['', Validators.required],
      segundoNombre: [''],
      primerApellido: ['', Validators.required],
      segundoApellido: [''],
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      genero: ['', Validators.required],
      direccion: [''],
      telefono: [''],
      fechaNacimiento: ['', Validators.required],
      usuarioName: ['', Validators.required],
      contrasenia: ['', Validators.required],
      state: [true],
      createdAt: [''],
      updatedAt: ['']
    });
  }

  // Envía el formulario para crear o actualizar persona y usuario
  onSubmit(): void {
    if (this.personaUsuarioForm.valid) {
      const persona: Persona = {
        ...this.personaUsuarioForm.value,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      if (this.isEditing) {
        this.updatePersonaUsuario(persona);
      } else {
        this.createPersonaUsuario(persona);
      }
    }
  }

  // Crea una nueva persona y usuario
  createPersonaUsuario(persona: Persona): void {
    this.personaUsuarioService.createPersonaUsuario(
      persona,
      this.personaUsuarioForm.value.usuarioName,
      this.personaUsuarioForm.value.contrasenia
    ).subscribe(
      () => {
        console.log('Persona y Usuario creados con éxito');
        this.resetForm();
      },
      (error) => {
        console.error('Error al crear Persona y Usuario:', error);
      }
    );
  }

  // Actualiza una persona y usuario existentes
  updatePersonaUsuario(persona: Persona): void {
    const usuario: Usuario = {
      id: persona.id,
      usuarioName: this.personaUsuarioForm.value.usuarioName,
      contrasenia: this.personaUsuarioForm.value.contrasenia,
      personaId: persona,
      state: this.personaUsuarioForm.value.state,
      createdAt: persona.createdAt,
      updatedAt: new Date().toISOString()
    };

    this.personaUsuarioService.updatePersonaUsuario(persona, usuario).subscribe(
      () => {
        console.log('Persona y Usuario actualizados con éxito');
        this.resetForm();
        this.isEditing = false;
      },
      (error) => {
        console.error('Error al actualizar Persona y Usuario:', error);
      }
    );
  }

  // Resetea el formulario
  resetForm(): void {
    this.personaUsuarioForm.reset({
      id: 0,
      primerNombre: '',
      segundoNombre: '',
      primerApellido: '',
      segundoApellido: '',
      tipoDocumento: '',
      numeroDocumento: '',
      email: '',
      genero: '',
      direccion: '',
      telefono: '',
      fechaNacimiento: '',
      usuarioName: '',
      contrasenia: '',
      state: true
    });
    this.isEditing = false;
  }
}
