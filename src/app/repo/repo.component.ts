import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CompetenciesService, AuthenticationService, RepositoryDto, RepositoryCreationDto , } from 'competence_repository_api_typescript-angular';
import { ReooDialogComponent } from '../reoo-dialog/reoo-dialog.component';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {
  repos: RepositoryDto[] = [];


  constructor(private router: Router, private compService: CompetenciesService, private authService: AuthenticationService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.compService.configuration.accessToken = this.authService.configuration.accessToken
    this.getRepos();

  }

  getRepos(): void {
    this.compService.repositoryMgmtControllerListRepositories() .subscribe({
      next: (v) => {
        console.log(v)
        this.repos = v.repositories
        
       
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })

  }

  openDialog(): void {
    //let dialogRef1 = this.dialog.open(CompDialogComponent);
    const dialogConfig = new MatDialogConfig();
    let dto :  RepositoryCreationDto = {
      name: ''
    };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;


    dialogConfig.data= dto;


    const dialogRef = this.dialog.open(ReooDialogComponent,dialogConfig);



    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
     
      dto.name  = result.name;
      
      dto = result;
      console.log(dto);

      this.compService.repositoryMgmtControllerCreateRepository(dto).subscribe({
        next: (v) => {
          console.log(v);  
        },
        error: (e) => console.error(e),
        complete: () => {console.info('complete')
        this.getRepos()}
      })
  ;
    });
  }

  

}