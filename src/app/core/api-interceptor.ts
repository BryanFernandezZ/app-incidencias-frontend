import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService, private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = this.authService.getAccessToken();
        console.log({ accessToken });
        if(accessToken !== null) {
            const newRequest = req.clone({
                headers: req.headers.set("Authorization", `Bearer ${accessToken}`)
            });
            return next.handle(newRequest).pipe(
                catchError((error) => {
                    if(error.status === 401) {
                        this.router.navigate(['login']);
                    }
                    return throwError(error);
                })
            );
        }
        return next.handle(req);
    }
}