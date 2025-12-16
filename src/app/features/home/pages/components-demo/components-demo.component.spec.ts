import { TestBed } from '@angular/core/testing';
import { ComponentsDemoComponent } from './components-demo.component';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('ComponentsDemoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsDemoComponent],
      providers: [provideAnimations()],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ComponentsDemoComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
