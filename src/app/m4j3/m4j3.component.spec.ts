import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M4j3Component } from './m4j3.component';

describe('M4j3Component', () => {
  let component: M4j3Component;
  let fixture: ComponentFixture<M4j3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M4j3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M4j3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
