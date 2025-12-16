import { TestBed } from '@angular/core/testing';
import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(IconComponent);
    const component = fixture.componentInstance;
    fixture.componentRef.setInput('name', 'home');
    expect(component).toBeTruthy();
  });

  it('should render home icon', () => {
    const fixture = TestBed.createComponent(IconComponent);
    fixture.componentRef.setInput('name', 'home');
    fixture.detectChanges();

    const svg = fixture.nativeElement.querySelector('svg');
    expect(svg).toBeTruthy();
  });
});
