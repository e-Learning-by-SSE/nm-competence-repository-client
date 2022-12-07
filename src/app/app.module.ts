import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ApiModule, Configuration, ConfigurationParameters } from 'competence_repository_api_typescript-angular'
import { ApiModule as ApiModuleAI, Configuration as Config2, ConfigurationParameters as Param2 }  from 'competence_ai_api_typescript-angular'
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ChartComponent } from './chart/chart.component';
import { CompetenciesComponent } from './competencies/competencies.component';
import { CompeteceDetailComponent } from './competece-detail/competece-detail.component';
import { LearningObjectsComponent } from './learning-objects/learning-objects.component';
import { LearningObjectDetailComponent } from './learning-object-detail/learning-object-detail.component';
import { LoGroupDetailComponent } from './lo-group-detail/lo-group-detail.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CompDialogComponent } from './comp-dialog/comp-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from "@angular/material/dialog";
import { UebercompDialogComponent } from './uebercomp-dialog/uebercomp-dialog.component';
import { LoDialogComponent } from './lo-dialog/lo-dialog.component';
import { LoGroupDialogComponent } from './lo-group-dialog/lo-group-dialog.component'
import {  MatProgressSpinnerModule}   from "@angular/material/progress-spinner";
import {  MatSortModule}   from "@angular/material/sort";
import {  MatPaginatorModule}   from "@angular/material/paginator";
import {  MatTableModule}   from "@angular/material/table";
import {  MatSelectModule}   from "@angular/material/select";
import {MatCheckboxModule} from  "@angular/material/checkbox";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import{MatMenuModule} from '@angular/material/menu'
import{MatButtonModule} from '@angular/material/button';
import { RepoComponent } from './repo/repo.component';
import { GraphCandLOComponent } from './graph-cand-lo/graph-cand-lo.component';
import { ReooDialogComponent } from './reoo-dialog/reoo-dialog.component';
import { UeberCompDetailComponent } from './ueber-comp-detail/ueber-comp-detail.component';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';
import { PathViewerComponent } from './path-viewer/path-viewer.component'
const configurationFactory = () => {
  const configParams: ConfigurationParameters = {
    basePath: 'https://staging.sse.uni-hildesheim.de:9010',
    apiKeys: { ['Authorization']: 'Bearer' },

  };
  return new Configuration(configParams);
};

const configurationFactory2 = () => {
  const configParams: Param2 = {
    basePath: 'http://127.0.0.1:5000',

  };
  return new Config2(configParams);
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ChartComponent,
    CompetenciesComponent,
    CompeteceDetailComponent,
    LearningObjectsComponent,
    LearningObjectDetailComponent,
    LoGroupDetailComponent,
    CompDialogComponent,
    UebercompDialogComponent,
    LoDialogComponent,
    LoGroupDialogComponent,
    RepoComponent,
    GraphCandLOComponent,
    ReooDialogComponent,
    UeberCompDetailComponent,
    RepoDetailComponent,
    PathViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatDialogModule,MatInputModule,
    FormsModule, ReactiveFormsModule,  MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxGraphModule,HttpClientModule,
    MatInputModule,MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    NgxChartsModule,
    MatProgressSpinnerModule,
    MatMenuModule,MatButtonModule,
    ApiModule.forRoot(configurationFactory),
    ApiModuleAI.forRoot(configurationFactory2)
  ],
  providers: [],
  bootstrap: [AppComponent], 
  entryComponents:[CompetenciesComponent,CompDialogComponent  ]
})
export class AppModule { }
