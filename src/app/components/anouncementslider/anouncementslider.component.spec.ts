import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnouncementSliderComponent } from './anouncementslider.component';

describe('AnouncementSliderComponent', () => {
  let component: AnouncementSliderComponent;
  let fixture: ComponentFixture<AnouncementSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnouncementSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnouncementSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
