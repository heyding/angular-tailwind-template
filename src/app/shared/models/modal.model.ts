export interface ModalConfig {
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  showCancel?: boolean;
}

export interface ModalResult {
  confirmed: boolean;
}
