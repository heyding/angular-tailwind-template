import { ErrorHandler, Injectable, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from '../../shared/services/toast.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private toastService = inject(ToastService);

  handleError(error: Error | HttpErrorResponse): void {
    let errorMessage: string;
    let errorDetails: string = '';

    if (error instanceof HttpErrorResponse) {
      // Server-side error
      errorMessage = this.getServerErrorMessage(error);
      errorDetails = `Status: ${error.status}`;
    } else {
      // Client-side error
      errorMessage = this.getClientErrorMessage(error);
      errorDetails = error.message;
    }

    // Log to console in development
    if (!this.isProduction()) {
      console.error('Global Error Handler caught:', error);
      console.error('Error Message:', errorMessage);
      console.error('Error Details:', errorDetails);
    }

    // Show user-friendly error message
    this.toastService.show(errorMessage, 'error');

    // TODO: Send error to logging service (e.g., Sentry, Application Insights)
    this.logErrorToRemoteService(error, errorMessage);
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    if (!navigator.onLine) {
      return 'No Internet Connection. Please check your network.';
    }

    if (error.status === 0) {
      return 'Server is not responding. Please try again later.';
    }

    if (error.status >= 400 && error.status < 500) {
      return error.error?.message || 'Client error occurred. Please check your request.';
    }

    if (error.status >= 500) {
      return 'Server error occurred. Our team has been notified.';
    }

    return `HTTP Error ${error.status}: ${error.message}`;
  }

  private getClientErrorMessage(error: Error): string {
    return error.message || 'An unexpected error occurred. Please try again.';
  }

  private isProduction(): boolean {
    // Check if we're in production mode
    return false; // TODO: Get from environment
  }

  private logErrorToRemoteService(error: Error | HttpErrorResponse, message: string): void {
    // TODO: Implement remote logging (Sentry, Application Insights, etc.)
    // Example structure:
    // {
    //   timestamp: new Date().toISOString(),
    //   message,
    //   stack: error instanceof Error ? error.stack : undefined,
    //   url: window.location.href,
    //   userAgent: navigator.userAgent
    // }
  }
}
