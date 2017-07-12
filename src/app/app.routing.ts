import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundingListComponent } from './funding-list/funding-list.component';
import { IllnessDetailComponent }   from './illness-detail/illness-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: FundingListComponent
  },
  {
   path: 'illness/:id',
   component: IllnessDetailComponent
 }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
