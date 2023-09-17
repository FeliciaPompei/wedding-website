import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayProgramComponent } from './day-program.component';

describe('DayProgramComponent', () => {
  let component: DayProgramComponent;
  let fixture: ComponentFixture<DayProgramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DayProgramComponent]
    });
    fixture = TestBed.createComponent(DayProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
