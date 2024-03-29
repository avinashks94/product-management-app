import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { IfDemoComponent } from './if-demo/if-demo.component';
import { MultitabDemoComponent } from './multitab-demo/multitab-demo.component';
import { MultiformDemoComponent } from './multiform-demo/multiform-demo.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent,
  },
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'product-add',
    component: ProductAddComponent,
  },
  {
    path: 'if-demo',
    component: IfDemoComponent,
  },
  {
    path: 'multi-form',
    component: MultiformDemoComponent,
  },
  {
    path: 'multi-tab',
    component: MultitabDemoComponent,
  },
  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
  {
    path: 'employees',
    component: EmployeeListComponent,
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
