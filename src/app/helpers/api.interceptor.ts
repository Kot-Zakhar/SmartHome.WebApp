import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import debug from 'debug';
import { apiServerAddress } from '@env/environment';
import { Device } from '@app/models';


@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    private log = debug('app:ApiInterceptor');
    
    constructor(private injector: Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.log(request);
        if (request.url.startsWith('api/')) {
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

