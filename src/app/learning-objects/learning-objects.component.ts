import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService, CompetenciesService, LearningObjectCreationDto, LearningObjectDto, LearningObjectGroupDto, LearningObjectsService, RepositoryDto, ShallowLoRepositoryDto } from 'competence_repository_api_typescript-angular';
import { CompDialogComponent } from '../comp-dialog/comp-dialog.component';
import { LoDialogComponent } from '../lo-dialog/lo-dialog.component';
import { LoGroupDialogComponent } from '../lo-group-dialog/lo-group-dialog.component';

@Component({
  selector: 'app-learning-objects',
  templateUrl: './learning-objects.component.html',
  styleUrls: ['./learning-objects.component.scss']
})
export class LearningObjectsComponent implements OnInit {
  los: LearningObjectDto[] = [];
  repos: ShallowLoRepositoryDto[] = [];
  selectedLo?: LearningObjectDto;
  losGroups: LearningObjectGroupDto[] = [];
  selected: RepositoryDto = {
    userId: '',
    id: '',
    name: ''
  };
  constructor(private router: Router, private loService: LearningObjectsService, private authService: AuthenticationService, private compService: CompetenciesService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loService.configuration.accessToken = this.authService.configuration.accessToken
    this.getRepos();
  }
  getRepos(): void {
    this.loService.loRepositoryControllerListRepositories().subscribe({
      next: (v) => {
        console.log(v)
        this.repos = v.repositories


      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })

  }
  repoChange() {
    this.getLOs();
    
    }
  getLOs(): void {
    this.loService.loRepositoryControllerLoadRepository(this.selected.id).subscribe({
      next: (v) => {
        console.log(v)
        this.los = v.learningObjects
        this.losGroups = v.learningObjectsGroups

      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })

  }

  openDialog(): void {
    //let dialogRef1 = this.dialog.open(CompDialogComponent);
    const dialogConfig = new MatDialogConfig();
    let dto: LearningObjectCreationDto = {
      name: '',
      requiredCompetencies: [],
      requiredUeberCompetencies: [],
      offeredCompetencies: [],
      offeredUeberCompetencies: []
    };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;


    dialogConfig.data = {dto:dto,repoId:this.selected.id};


    const dialogRef = this.dialog.open(LoDialogComponent, dialogConfig);



    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      dto.description = result.description;
      dto.name = result.name;

      dto = result;
      console.log(dto);

      this.loService.loRepositoryControllerCreateLearningObject(dto, this.selected.id).subscribe({
        next: (v) => {
          console.log(v);
          this.getLOs();

        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      })
        ;
    });
  }

  openDialogGroup(): void {
    //let dialogRef1 = this.dialog.open(CompDialogComponent);
    const dialogConfig = new MatDialogConfig();
    let dto: LearningObjectGroupDto = {
      name: '',
      id: '',
      repositoryId: '',
      nestedLearningObjects: [],
      nestedGroups: []
    };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;


    dialogConfig.data = dto;


    const dialogRef = this.dialog.open(LoGroupDialogComponent, dialogConfig);



    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      dto.description = result.description;
      dto.name = result.name;
      /*   this.loService.loRepositoryControllerCreateLearningObject   (dto,'1').subscribe({
           next: (v) => {
             console.log(v)
   
     
           },
           error: (e) => console.error(e),
           complete: () => console.info('complete')
         })
     ;*/
    });
  }


}