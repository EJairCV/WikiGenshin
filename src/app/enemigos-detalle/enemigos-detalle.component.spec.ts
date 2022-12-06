import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemigosDetalleComponent } from './enemigos-detalle.component';

describe('EnemigosDetalleComponent', () => {
  let component: EnemigosDetalleComponent;
  let fixture: ComponentFixture<EnemigosDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnemigosDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemigosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
