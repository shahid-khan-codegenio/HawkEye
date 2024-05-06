import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },

      {
        path: 'careers',
        loadChildren: () => import('./about/careers/careers.module').then(m => m.CareersModule)
      },
      {
        path: 'success-stories',
        loadChildren: () => import('./about/success-stories/success-stories.module').then(m => m.SuccessStoriesModule)
      },
      {
        path: 'testimonials',
        loadChildren: () => import('./about/testimonials/testimonials.module').then(m => m.TestimonialsModule)
      },
      {
        path: 'earn-reward',
        loadChildren: () => import('./about/earn-reward/earn-reward.module').then(m => m.EarnRewardModule)
      },

      {
        path: 'how-to-start',
        loadChildren: () => import('./how-to-start/how-to-start.module').then(m => m.HowToStartModule)
      },
      {
        path: 'FAQ',
        loadChildren: () => import('./FAQ/FAQ.module').then(m => m.FAQModule)
      },
      {
        path: 'contact-us',
        loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule)
      },
      {
        path: 'services',
        loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
      },
      {
        path: 'truck-type',
        loadChildren: () => import('./truck-type/truck-type.module').then(m => m.TruckTypeModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      },

    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRouting { }
