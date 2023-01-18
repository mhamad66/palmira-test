import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    MenuComponent,
    BreadcrumbComponent,
    FooterComponent,
    LayoutComponent
  ],
  exports: [
    NavbarComponent,
    LayoutComponent,
    MenuComponent,
    SidebarComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
