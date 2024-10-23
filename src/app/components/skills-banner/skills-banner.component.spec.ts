import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsBannerComponent } from './skills-banner.component';

describe('SkillsBannerComponent', () => {
  let component: SkillsBannerComponent;
  let fixture: ComponentFixture<SkillsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillsBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
