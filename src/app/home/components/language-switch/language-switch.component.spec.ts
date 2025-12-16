import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageSwitchComponent } from './language-switch.component';
import { TranslateModule } from '@ngx-translate/core';

describe('LanguageSwitchComponent', () => {
  let component: LanguageSwitchComponent;
  let fixture: ComponentFixture<LanguageSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageSwitchComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
