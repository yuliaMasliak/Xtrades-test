import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dark-mode/home/home.component';
import { CareerComponent } from './dark-mode/career/career.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'career', component: CareerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
