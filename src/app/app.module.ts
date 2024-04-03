import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { IfDemoComponent } from './if-demo/if-demo.component';
import { MultiformDemoComponent } from './multiform-demo/multiform-demo.component';
import { MultitabDemoComponent } from './multitab-demo/multitab-demo.component';
import { MyCustomDirectiveDirective } from './my-custom-directive.directive';
import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeCountComponent } from './employe-count/employe-count.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    ProductListComponent,
    ProductAddComponent,
    ErrorPageComponent,
    IfDemoComponent,
    MultiformDemoComponent,
    MultitabDemoComponent,
    MyCustomDirectiveDirective,
    DataBindingComponent,
    EmployeeListComponent,
    EmployeCountComponent,
    ParentComponent,
    ChildComponent,
    UserListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
