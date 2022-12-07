import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { CompeteceDetailComponent } from './competece-detail/competece-detail.component';
import { CompetenciesComponent } from './competencies/competencies.component';
import { GraphCandLOComponent } from './graph-cand-lo/graph-cand-lo.component';
import { LearningObjectDetailComponent } from './learning-object-detail/learning-object-detail.component';
import { LearningObjectsComponent } from './learning-objects/learning-objects.component';
import { LoGroupDetailComponent } from './lo-group-detail/lo-group-detail.component';
import { LoginComponent } from './login/login.component';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';
import { RepoComponent } from './repo/repo.component';
import { UeberCompDetailComponent } from './ueber-comp-detail/ueber-comp-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, 
  { path: 'competencies', component: CompetenciesComponent },
  { path: 'comp/:id', component: CompeteceDetailComponent },
  { path: 'uebercomp/:id', component: UeberCompDetailComponent },
  { path: 'graph', component: ChartComponent },
  { path: 'los', component: LearningObjectsComponent },
  { path: 'repo', component: RepoComponent },
  { path: 'repo/:id', component: RepoDetailComponent },
  { path: 'los/:id', component: LearningObjectDetailComponent },
  { path: 'losGroup/:id', component: LoGroupDetailComponent },
  {path: 'graphLOC', component:GraphCandLOComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }