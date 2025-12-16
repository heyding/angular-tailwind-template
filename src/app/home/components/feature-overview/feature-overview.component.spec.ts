import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureOverviewComponent } from './feature-overview.component';
import { TranslateModule } from '@ngx-translate/core';

describe('FeatureOverviewComponent', () => {
  let component: FeatureOverviewComponent;
  let fixture: ComponentFixture<FeatureOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureOverviewComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
