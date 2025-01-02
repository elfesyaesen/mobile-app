import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.component').then((m) => m.ProductsComponent),
  },
  {
    path: 'product/:id',
    loadComponent: () => import('./pages/product/product.component').then((m) => m.ProductComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
