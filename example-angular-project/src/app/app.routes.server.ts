import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'customers',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'add-customer',
    renderMode: RenderMode.Prerender
  }
];
