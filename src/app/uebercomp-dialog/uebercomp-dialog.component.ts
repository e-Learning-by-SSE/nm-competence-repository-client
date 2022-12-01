import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService, CompetenceDto, CompetenciesService, ResolvedUeberCompetenceDto, UeberCompetenceCreationDto } from 'competence_repository_api_typescript-angular';
import { LoDialogComponent } from '../lo-dialog/lo-dialog.component';

@Component({
  selector: 'app-uebercomp-dialog',
  templateUrl: './uebercomp-dialog.component.html',
  styleUrls: ['./uebercomp-dialog.component.scss']
})
export class UebercompDialogComponent implements OnInit{

  competencies: CompetenceDto[] = [];
  ueber_competencies: ResolvedUeberCompetenceDto[] = [];

  displayedColumns = ["id", "level", "skill", "select"];
  displayedColumnsUeber = ["id", "name", "desc", "select"];

  selectionComp = new SelectionModel<CompetenceDto>(true, []);
  selectionUeberComp = new SelectionModel<ResolvedUeberCompetenceDto>(true, []);
  constructor(private compService: CompetenciesService,
    private authService: AuthenticationService,
    public dialogRef: MatDialogRef<UebercompDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UeberCompetenceCreationDto,
  ) {}
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

  selectHandlerComp(row: CompetenceDto) {

    this.selectionComp.toggle(row);
    let locArray : Array<string> = [];
    this.selectionComp.selected.forEach(element => {
      console.log(element.id)
      locArray.push(element.id)
    });
    console.log(locArray);
    this.data.nestedCompetencies   = locArray;
  }

  selectHandlerUeberComp(row: ResolvedUeberCompetenceDto) {

    this.selectionUeberComp.toggle(row);

    let locArray : Array<string> = [];
    this.selectionUeberComp.selected.forEach(element => {
      console.log(element.id)
      locArray.push(element.id)
    });
    console.log(locArray);
    this.data.nestedUeberCompetencies = locArray;
  }


  onNoClick(): void {
    this.dialogRef.close();
  }}

