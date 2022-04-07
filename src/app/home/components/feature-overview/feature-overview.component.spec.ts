import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureOverviewComponent } from './feature-overview.component';

describe('FeatureOverviewComponent', () => {
  let component: FeatureOverviewComponent;
  let fixture: ComponentFixture<FeatureOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
