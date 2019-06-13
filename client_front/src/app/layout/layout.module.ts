import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ModalComponent } from './modal/modal.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, MainLayoutComponent, ModalComponent, NavigationComponent, ToastComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports: [FooterComponent, HeaderComponent, MainLayoutComponent, ModalComponent, NavigationComponent, ToastComponent]
})
export class LayoutModule { }
