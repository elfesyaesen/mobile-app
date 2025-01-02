import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
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
    path: 'production-entry',
    loadComponent: () => import('./pages/product/product.component').then((m) => m.ProductComponent),
  },
  {
    path: 'production-export',
    loadComponent: () => import('./pages/product/product.component').then((m) => m.ProductComponent),
  },
  {
    path: 'production-inventory',
    loadComponent: () => import('./pages/product/product.component').then((m) => m.ProductComponent),
  },
  {
    path: '**',
    redirectTo: 'product/1',
    pathMatch: 'full',
  },
];
