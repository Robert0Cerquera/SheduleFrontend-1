import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoFormacionComponent } from './tipo-formacion.component';

describe('TipoFormacionComponent', () => {
  let component: TipoFormacionComponent;
  let fixture: ComponentFixture<TipoFormacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoFormacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoFormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
