import { TestBed } from '@angular/core/testing';

import { PersonaUsuarioService } from './persona-usuario.service';

describe('PersonaUsuarioService', () => {
  let service: PersonaUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
