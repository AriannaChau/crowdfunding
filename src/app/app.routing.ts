import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundingListComponent } from './funding-list/funding-list.component';
import { IllnessDetailComponent }   from './illness-detail/illness-detail.component';
import { AdminComponent }   from './admin/admin.component';
import { NewCauseComponent } from './new-cause/new-cause.component';

const appRoutes: Routes = [
  {
    path: '',
    component: FundingListComponent
  },
  {
    path: 'illness/:id',
    component: IllnessDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'new-cause',
    component: NewCauseComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
