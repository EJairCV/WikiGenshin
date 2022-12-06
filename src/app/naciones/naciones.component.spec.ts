import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NacionesComponent } from './naciones.component';

describe('NacionesComponent', () => {
  let component: NacionesComponent;
  let fixture: ComponentFixture<NacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
