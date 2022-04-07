import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FociGuard } from './pages/fociPage/foci.guard';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule),
  },
  {
    path: 'foci', loadChildren: () => import('./pages/fociPage/foci.module').then(m => m.FociModule), canActivate: [FociGuard]
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
