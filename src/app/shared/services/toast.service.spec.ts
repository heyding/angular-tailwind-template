import { TestBed } from '@angular/core/testing';
import { ToastService } from './toast.service';

describe('ToastService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add toast', done => {
    service.show('Test message', 'info');

    service.toasts$.subscribe(toasts => {
      if (toasts.length > 0) {
        expect(toasts.length).toBe(1);
        expect(toasts[0].message).toBe('Test message');
        expect(toasts[0].type).toBe('info');
        done();
      }
    });
  });

  it('should remove toast by id', done => {
    service.show('Test message', 'info', 0);

    service.toasts$.subscribe(toasts => {
      if (toasts.length > 0) {
        const toastId = toasts[0].id;
        service.remove(toastId);

        service.toasts$.subscribe(updatedToasts => {
          expect(updatedToasts.length).toBe(0);
          done();
        });
      }
    });
  });

  it('should clear all toasts', done => {
    service.show('Test 1', 'info', 0);
    service.show('Test 2', 'success', 0);

    service.toasts$.subscribe(toasts => {
      if (toasts.length === 2) {
        service.clear();

        service.toasts$.subscribe(clearedToasts => {
          expect(clearedToasts.length).toBe(0);
          done();
        });
      }
    });
  });
});
