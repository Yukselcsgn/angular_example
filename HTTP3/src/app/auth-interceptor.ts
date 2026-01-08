import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  //bu isteğe burada müdehale edebilirsiniz
  const clone = req.clone({
    headers: new HttpHeaders({
      "Authorization": "Bearer token...",
      "Year": "2026"
    })
  });
  return next(req);
};
