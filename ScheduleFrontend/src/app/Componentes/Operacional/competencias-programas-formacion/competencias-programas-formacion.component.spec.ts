import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenciasProgramasFormacionComponent } from './competencias-programas-formacion.component';

describe('CompetenciasProgramasFormacionComponent', () => {
  let component: CompetenciasProgramasFormacionComponent;
  let fixture: ComponentFixture<CompetenciasProgramasFormacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetenciasProgramasFormacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetenciasProgramasFormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
