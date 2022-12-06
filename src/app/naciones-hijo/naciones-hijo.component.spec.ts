import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NacionesHijoComponent } from './naciones-hijo.component';

describe('NacionesHijoComponent', () => {
  let component: NacionesHijoComponent;
  let fixture: ComponentFixture<NacionesHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NacionesHijoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NacionesHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
