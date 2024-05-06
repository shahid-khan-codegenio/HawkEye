import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TruckTypeComponent } from './truck-type.component';

const routes: Routes = [
    {
        path: '',
        component: TruckTypeComponent,
        children: [
            {
                path: 'dry-van',
                loadChildren: () => import('./dry-van/dry-van.module').then(m => m.DryVanModule)
            },
            {
                path: 'reefer',
                loadChildren: () => import('./reefer/reefer.module').then(m => m.ReeferModule)
            },
            {
                path: 'flatbed',
                loadChildren: () => import('./flatbed/flatbed.module').then(m => m.FlatbedModule)
            },
            {
                path: 'step-deck',
                loadChildren: () => import('./step-deck/step-deck.module').then(m => m.StepDeckModule)
            },
            {
                path: 'power-only',
                loadChildren: () => import('./power-only/power-only.module').then(m => m.PowerOnlyModule)
            },
            {
                path: 'box-truck',
                loadChildren: () => import('./box-truck/box-truck.module').then(m => m.BoxTruckModule)
            },
            {
                path: 'hotshot',
                loadChildren: () => import('./hotshot/hotshot.module').then(m => m.HotshotModule)
            },
            {
                path: 'straight-truck',
                loadChildren: () => import('./straight-truck/straight-truck.module').then(m => m.StraightTruckModule)
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TruckTypeRouting { }
