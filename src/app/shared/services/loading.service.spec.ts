import { TestBed } from '@angular/core/testing';
import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show loading', done => {
    service.show();
    service.loading$.subscribe(isLoading => {
      expect(isLoading).toBe(true);
      done();
    });
  });

  it('should hide loading', done => {
    service.show();
    service.hide();
    service.loading$.subscribe(isLoading => {
      expect(isLoading).toBe(false);
      done();
    });
  });
});
