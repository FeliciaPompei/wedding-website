import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpSectionComponent } from './rsvp-section.component';

describe('RsvpSectionComponent', () => {
  let component: RsvpSectionComponent;
  let fixture: ComponentFixture<RsvpSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RsvpSectionComponent]
    });
    fixture = TestBed.createComponent(RsvpSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
