import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { ApiDemoComponent } from './api-demo.component';

describe('ApiDemoComponent', () => {
  let component: ApiDemoComponent;
  let fixture: ComponentFixture<ApiDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiDemoComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideTranslateService()],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
