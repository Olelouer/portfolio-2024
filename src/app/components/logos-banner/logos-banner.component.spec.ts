import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosBannerComponent } from './logos-banner.component';

describe('LogosBannerComponent', () => {
  let component: LogosBannerComponent;
  let fixture: ComponentFixture<LogosBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogosBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogosBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
