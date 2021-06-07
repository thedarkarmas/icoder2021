import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstuddentComponent } from './addstuddent.component';

describe('AddstuddentComponent', () => {
  let component: AddstuddentComponent;
  let fixture: ComponentFixture<AddstuddentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstuddentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstuddentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
