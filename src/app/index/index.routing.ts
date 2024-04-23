import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';

const routes: Routes = [
  {
    path: '', 
    component: IndexComponent,
    children:[
      { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'about', loadChildren: () => import('./about/about/about.module').then(m => m.AboutModule) },
      { path: 'careers', loadChildren: () => import('./about/careers/careers.module').then(m => m.CareersModule) },
      { path: 'success-stories', loadChildren: () => import('./about/success-stories/success-stories.module').then(m => m.SuccessStoriesModule) },
      { path: 'testimonials', loadChildren: () => import('./about/testimonials/testimonials.module').then(m => m.TestimonialsModule) },
      { path: 'earn-reward', loadChildren: () => import('./about/earn-reward/earn-reward.module').then(m => m.EarnRewardModule) },
      { path: 'how-to-start', loadChildren: () => import('./how-to-start/how-to-start.module').then(m => m.HowToStartModule) },
      { path: 'shippers', loadChildren: () => import('./shippers/shippers.module').then(m => m.ShippersModule) },
      { path: 'FAQ', loadChildren: () => import('./FAQ/FAQ.module').then(m => m.FAQModule) },
      { path: 'contact-us', loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule) },

    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRouting { }
