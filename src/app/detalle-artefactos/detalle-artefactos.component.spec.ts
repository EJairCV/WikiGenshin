import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleArtefactosComponent } from './detalle-artefactos.component';

describe('DetalleArtefactosComponent', () => {
  let component: DetalleArtefactosComponent;
  let fixture: ComponentFixture<DetalleArtefactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleArtefactosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleArtefactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
