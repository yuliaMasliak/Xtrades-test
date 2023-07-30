import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DarkComponent } from './components/dark/dark.component';

const routes: Routes = [{ path: 'dark-mode', component: DarkComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
