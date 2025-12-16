import { TestBed } from '@angular/core/testing';
import { ToastContainerComponent } from './toast-container.component';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('ToastContainerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastContainerComponent],
      providers: [provideAnimations()],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ToastContainerComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
