import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { catchError, throwError } from 'rxjs';
import { ToastService } from '../../shared/services/toast.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService = inject(ToastService);
  const translate = inject(TranslateService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = translate.instant('errors.unexpected');

      if (error.error instanceof ErrorEvent) {
        // Client-side error
        errorMessage = translate.instant('errors.clientError', { message: error.error.message });
      } else {
        // Server-side error
        switch (error.status) {
          case 400:
            errorMessage = translate.instant('errors.badRequest');
            break;
          case 401:
            errorMessage = translate.instant('errors.unauthorized');
            break;
          case 403:
            errorMessage = translate.instant('errors.forbidden');
            break;
          case 404:
            errorMessage = translate.instant('errors.notFound');
            break;
          case 500:
            errorMessage = translate.instant('errors.serverError');
            break;
          default:
            errorMessage = translate.instant('errors.default', { status: error.status, message: error.message });
        }
      }

      // Show error toast
      toastService.error(errorMessage);

      console.error('HTTP Error:', {
        status: error.status,
        message: error.message,
        url: error.url,
      });

      return throwError(() => error);
    })
  );
};
