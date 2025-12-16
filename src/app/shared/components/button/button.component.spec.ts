import { TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should emit clicked event when clicked', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component = fixture.componentInstance;
    let clickedEvent: MouseEvent | undefined;

    component.clicked.subscribe(event => {
      clickedEvent = event;
    });

    const button = fixture.nativeElement.querySelector('button');
    button.click();

    expect(clickedEvent).toBeDefined();
  });

  it('should not emit clicked event when disabled', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    fixture.componentRef.setInput('disabled', true);
    const component = fixture.componentInstance;
    let clickedEvent: MouseEvent | undefined;

    component.clicked.subscribe(event => {
      clickedEvent = event;
    });

    const button = fixture.nativeElement.querySelector('button');
    button.click();

    expect(clickedEvent).toBeUndefined();
  });
});
