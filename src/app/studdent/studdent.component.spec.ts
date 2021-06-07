import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuddentComponent } from './studdent.component';

describe('StuddentComponent', () => {
  let component: StuddentComponent;
  let fixture: ComponentFixture<StuddentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuddentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StuddentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
