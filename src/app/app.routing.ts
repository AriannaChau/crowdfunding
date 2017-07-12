import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundingListComponent } from './funding-list/funding-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: FundingListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
