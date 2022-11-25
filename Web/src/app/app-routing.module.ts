import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { AllComponent } from './_pages/all/all.component';
import { HomeComponent } from './_pages/home/home.component';
import { InfoAddComponent } from './_pages/info-add/info-add.component';
import { InfoAdtComponent } from './_pages/info-adt/info-adt.component';
import { InfoBenComponent } from './_pages/info-ben/info-ben.component';
import { InfoConComponent } from './_pages/info-con/info-con.component';


const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'asociatividad',
        component: InfoBenComponent
      },
      {
        path: 'asistencia-tecnica',
        component: InfoConComponent
      },
      {
        path: 'pidar',
        component: InfoAddComponent
      },
      {
        path: 'adt',
        component: InfoAdtComponent
      },
      {
        path: 'all',
        component: AllComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
