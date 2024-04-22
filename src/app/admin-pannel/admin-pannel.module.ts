import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPannelComponent } from './admin-pannel.component';
import { AdminPannelRouting } from './admin-pannel.routing';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';

@NgModule({
  imports: [
    CommonModule,
    AdminPannelRouting,
    FormsModule
  ],
  declarations: [AdminPannelComponent, SidebarComponent, AdminHeaderComponent]
})
export class AdminPannelModule { }
