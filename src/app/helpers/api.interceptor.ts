import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import debug from 'debug';
import { apiServerAddress } from 'src/environments/environment';

const log = debug('app:ApiInterceptor');

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        log(request);
        if (request.url.indexOf('api/') === 0) {
            const newRequest = request.clone({url:  apiServerAddress + request.url});
            return next.handle(newRequest);
        }
        return next.handle(request);
    }
}

export const ApiInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true
};

