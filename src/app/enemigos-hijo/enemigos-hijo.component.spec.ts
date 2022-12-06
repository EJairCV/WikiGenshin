import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemigosHijoComponent } from './enemigos-hijo.component';

describe('EnemigosHijoComponent', () => {
  let component: EnemigosHijoComponent;
  let fixture: ComponentFixture<EnemigosHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnemigosHijoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemigosHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
