import { Component, OnInit } from '@angular/core';
import { CompetenceDto, ResolvedUeberCompetenceDto, CompetenceCreationDto, UeberCompetenceCreationDto } from 'competence_repository_api_typescript-angular';
import { COMP } from '../mock-comp';
import { CompetenciesService, AuthenticationService } from 'competence_repository_api_typescript-angular';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CompDialogComponent } from '../comp-dialog/comp-dialog.component';
import { UebercompDialogComponent } from '../uebercomp-dialog/uebercomp-dialog.component';

@Component({
  selector: 'app-competencies',
  templateUrl: './competencies.component.html',
  styleUrls: ['./competencies.component.scss']
})
export class CompetenciesComponent implements OnInit {
  competencies: CompetenceDto[] = [];
  selectedComp?: CompetenceDto;
  ueber_competencies: ResolvedUeberCompetenceDto[] = [];
  selected_ueber_Comp?: ResolvedUeberCompetenceDto;

  constructor(private router: Router, private compService: CompetenciesService, private authService: AuthenticationService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.compService.configuration.accessToken = this.authService.configuration.accessToken
    this.getCompetencies();

  }

  getCompetencies(): void {
    this.compService.repositoryMgmtControllerLoadResolvedRepository('1').subscribe({
      next: (v) => {
        console.log(v)
        this.competencies = v.competencies
        this.ueber_competencies = v.ueberCompetencies

      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })

  }


  openDialog(): void {
    //let dialogRef1 = this.dialog.open(CompDialogComponent);
    const dialogConfig = new MatDialogConfig();
    let dto :  CompetenceCreationDto = {
      skill: '',
      level: 0
    };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;


    dialogConfig.data= { level: '', skill: '' , description:''};


    const dialogRef = this.dialog.open(CompDialogComponent,dialogConfig);



    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      dto.description = result.description;
      dto.level= Number(result.level);
      dto.skill=result.skill;
      this.compService.repositoryMgmtControllerAddCompetence(dto,'1').subscribe({
        next: (v) => {
          console.log(v)

  
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      })
  ;
    });
  }

  openDialogUeber(): void {
    //let dialogRef1 = this.dialog.open(CompDialogComponent);
    const dialogConfig = new MatDialogConfig();
    let dto :  UeberCompetenceCreationDto = {
      name: ''
    };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;


    dialogConfig.data= dto;


    const dialogRef = this.dialog.open(UebercompDialogComponent,dialogConfig);



    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      dto.description = result.description;
     dto.name = result.name
      this.compService.repositoryMgmtControllerAddUeberCompetence(dto,'1').subscribe({
        next: (v) => {
          console.log(v)

  
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      })
  ;
    });
  }


}

