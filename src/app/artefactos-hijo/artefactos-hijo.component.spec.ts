import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtefactosHijoComponent } from './artefactos-hijo.component';

describe('ArtefactosHijoComponent', () => {
  let component: ArtefactosHijoComponent;
  let fixture: ComponentFixture<ArtefactosHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtefactosHijoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtefactosHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
