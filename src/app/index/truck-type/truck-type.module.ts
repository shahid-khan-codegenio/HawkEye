import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckTypeComponent } from './truck-type.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TruckTypeComponent,
    children: [
      { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'dry-van', loadChildren: () => import('./dry-van/dry-van.module').then(m => m.DryVanModule) },
      { path: 'reefer', loadChildren: () => import('./reefer/reefer.module').then(m => m.ReeferModule) },
      { path: 'flatbed', loadChildren: () => import('./flatbed/flatbed.module').then(m => m.FlatbedModule) },
      // { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      // { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'power-only', loadChildren: () => import('./power-only/power-only.module').then(m => m.PowerOnlyModule) },
      { path: 'box-truck', loadChildren: () => import('./box-truck/box-truck.module').then(m => m.BoxTruckModule) },
      { path: 'hotshot', loadChildren: () => import('./hotshot/hotshot.module').then(m => m.HotshotModule) },
      { path: 'straight-truck', loadChildren: () => import('./straight-truck/straight-truck.module').then(m => m.StraightTruckModule) },
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TruckTypeComponent]
})
export class TruckTypeModule { }
