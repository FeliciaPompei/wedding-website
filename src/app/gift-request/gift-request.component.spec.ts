import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftRequestComponent } from './gift-request.component';

describe('GiftRequestComponent', () => {
  let component: GiftRequestComponent;
  let fixture: ComponentFixture<GiftRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiftRequestComponent]
    });
    fixture = TestBed.createComponent(GiftRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
