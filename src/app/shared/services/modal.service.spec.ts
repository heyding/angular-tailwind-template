import { TestBed } from '@angular/core/testing';
import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open modal', done => {
    service.open({ message: 'Test modal' });

    service.modalState$.subscribe(state => {
      if (state.isOpen) {
        expect(state.isOpen).toBe(true);
        expect(state.config.message).toBe('Test modal');
        done();
      }
    });
  });

  it('should return confirmed result', async () => {
    const promise = service.open({ message: 'Test' });
    service.confirm();
    const result = await promise;

    expect(result.confirmed).toBe(true);
  });

  it('should return cancelled result', async () => {
    const promise = service.open({ message: 'Test' });
    service.cancel();
    const result = await promise;

    expect(result.confirmed).toBe(false);
  });
});
