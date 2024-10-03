import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapsCompetenciasComponent } from './raps-competencias.component';

describe('RapsCompetenciasComponent', () => {
  let component: RapsCompetenciasComponent;
  let fixture: ComponentFixture<RapsCompetenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RapsCompetenciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapsCompetenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
