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
import {MatCheckboxModule} from  "@angular/material/checkbox";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import{MatMenuModule} from '@angular/material/menu'
import{MatButtonModule} from '@angular/material/button'
const configurationFactory = () => {
  const configParams: ConfigurationParameters = {
    basePath: 'https://staging.sse.uni-hildesheim.de:9010',
    apiKeys: { ['Authorization']: 'Bearer' },

  };
  return new Configuration(configParams);
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
    LoGroupDialogComponent
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
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    NgxChartsModule,
    MatProgressSpinnerModule,
    MatMenuModule,MatButtonModule,
    ApiModule.forRoot(configurationFactory),
  ],
  providers: [],
  bootstrap: [AppComponent], 
  entryComponents:[CompetenciesComponent,CompDialogComponent  ]
})
export class AppModule { }