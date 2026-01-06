import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Customers } from './pages/customers/customers';
import { AddCustomer } from './pages/add-customer/add-customer';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    pathMatch: 'full'
  },
  {
    path: 'customers',
    component: Customers},
  {
    path: 'add-customer',
    component: AddCustomer}
];

