import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WcBioHostComponent } from './pages/wc-bio-host/wc-bio-host.component';


const routes: Routes = [
  { component: WcBioHostComponent, path: 'biometrics-host' },
  { path: '**', redirectTo: 'biometrics-host' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
