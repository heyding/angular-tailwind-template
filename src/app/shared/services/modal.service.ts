import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModalConfig, ModalResult } from '../models/modal.model';

interface ModalState {
  isOpen: boolean;
  config: ModalConfig;
  resolve?: (result: ModalResult) => void;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalStateSubject = new BehaviorSubject<ModalState>({
    isOpen: false,
    config: {},
  });
  public modalState$: Observable<ModalState> = this.modalStateSubject.asObservable();

  open(config: ModalConfig): Promise<ModalResult> {
    return new Promise(resolve => {
      this.modalStateSubject.next({
        isOpen: true,
        config: {
          title: config.title || 'Confirm',
          message: config.message || 'Are you sure?',
          confirmText: config.confirmText || 'Confirm',
          cancelText: config.cancelText || 'Cancel',
          showCancel: config.showCancel !== false,
        },
        resolve,
      });
    });
  }

  confirm(): void {
    const state = this.modalStateSubject.value;
    if (state.resolve) {
      state.resolve({ confirmed: true });
    }
    this.close();
  }

  cancel(): void {
    const state = this.modalStateSubject.value;
    if (state.resolve) {
      state.resolve({ confirmed: false });
    }
    this.close();
  }

  private close(): void {
    this.modalStateSubject.next({
      isOpen: false,
      config: {},
    });
  }
}
