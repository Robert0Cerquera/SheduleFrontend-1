import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CargaMasivaService } from '../../../Services/carga-masiva.service';

@Component({
  selector: 'app-carga-masiva',
  templateUrl: './carga-masiva.component.html',
  styleUrl: './carga-masiva.component.css'
})
export class CargaMasivaComponent {
  uploadForm: FormGroup;
  selectedFile: File | null = null;
  isLoading = false;
  message = '';
  success = false;

  constructor(private fb: FormBuilder, private cargaMasivaService: CargaMasivaService) {
    this.uploadForm = this.fb.group({
      file: [null, Validators.required]
    });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.uploadForm.patchValue({
        file: file
      });
    }
  }

  onSubmit(): void {
    if (this.uploadForm.valid && this.selectedFile) {
      this.isLoading = true;
      this.cargaMasivaService.subirArchivo(this.selectedFile).subscribe({
        next: (response) => {
          this.isLoading = false;
          this.success = true;
          this.message = 'Carga masiva completada exitosamente.';
        },
        error: (error: HttpErrorResponse) => {
          this.isLoading = false;
          this.success = false;
          this.message = `Error durante la carga masiva: ${error.message}`;
        }
      });
    }
  }
}
