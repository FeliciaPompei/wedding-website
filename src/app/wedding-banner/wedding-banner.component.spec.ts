import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingBannerComponent } from './wedding-banner.component';

describe('WeddingBannerComponent', () => {
  let component: WeddingBannerComponent;
  let fixture: ComponentFixture<WeddingBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeddingBannerComponent]
    });
    fixture = TestBed.createComponent(WeddingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
