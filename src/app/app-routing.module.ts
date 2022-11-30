import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { CompeteceDetailComponent } from './competece-detail/competece-detail.component';
import { CompetenciesComponent } from './competencies/competencies.component';
import { LearningObjectDetailComponent } from './learning-object-detail/learning-object-detail.component';
import { LearningObjectsComponent } from './learning-objects/learning-objects.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, 
  { path: 'competencies', component: CompetenciesComponent },
  { path: 'comp/:id', component: CompeteceDetailComponent },
  { path: 'graph', component: ChartComponent },
  { path: 'los', component: LearningObjectsComponent },
  { path: 'los/:id', component: LearningObjectDetailComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }