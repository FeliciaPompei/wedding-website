import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationMapsComponent } from './location-maps.component';

describe('LocationMapsComponent', () => {
  let component: LocationMapsComponent;
  let fixture: ComponentFixture<LocationMapsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationMapsComponent]
    });
    fixture = TestBed.createComponent(LocationMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
