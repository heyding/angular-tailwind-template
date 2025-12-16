import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ApiDemoComponent } from './api-demo.component';
import { TranslateModule } from '@ngx-translate/core';

describe('ApiDemoComponent', () => {
  let component: ApiDemoComponent;
  let fixture: ComponentFixture<ApiDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiDemoComponent, TranslateModule.forRoot()],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
