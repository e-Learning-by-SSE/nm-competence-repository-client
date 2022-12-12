import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService, CompetenciesService, LearningObjectDto } from 'competence_repository_api_typescript-angular';
import { CompetenceDto, ResolvedUeberCompetenceDto, CompetenceCreationDto, UeberCompetenceCreationDto } from 'competence_repository_api_typescript-angular';
@Component({
  selector: 'app-lo-dialog',
  templateUrl: './lo-dialog.component.html',
  styleUrls: ['./lo-dialog.component.scss']
})
export class LoDialogComponent implements OnInit {

  competencies: CompetenceDto[] = [];
  ueber_competencies: ResolvedUeberCompetenceDto[] = [];

  displayedColumns = ["id", "level", "skill", "select"];
  displayedColumnsUeber = ["id", "name", "desc", "select"];

  selectionReqComp = new SelectionModel<CompetenceDto>(true, []);
  selectionReqUeber = new SelectionModel<ResolvedUeberCompetenceDto>(true, []);
  selectionOfferedComp = new SelectionModel<CompetenceDto>(true, []);
  selectionOfferedUeberComp = new SelectionModel<ResolvedUeberCompetenceDto>(true, []);

  constructor(private compService: CompetenciesService,
    private authService: AuthenticationService,
    public dialogRef: MatDialogRef<LoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

  }


  ngOnInit(): void {
    this.compService.configuration.accessToken = this.authService.configuration.accessToken
    this.getCompetencies();

  }

  selectHandler(row: CompetenceDto) {

    this.selectionReqComp.toggle(row);
   
    let locArray : Array<string> = [];
    this.selectionReqComp.selected.forEach(element => {
      console.log(element.id)
      locArray.push(element.id)
    });
    console.log(locArray);
    this.data.requiredCompetencies = locArray;
  }

  selectHandlerReqUeber(row: ResolvedUeberCompetenceDto) {

    this.selectionReqUeber.toggle(row);
    let locArray : Array<string> = [];
    this.selectionReqUeber.selected.forEach(element => {
      console.log(element.id)
      locArray.push(element.id)
    });
    console.log(locArray);
    this.data.requiredUeberCompetencies = locArray;
  }

  selectHandlerOfferedComp(row: CompetenceDto) {

    this.selectionOfferedComp.toggle(row);
    let locArray : Array<string> = [];
    this.selectionOfferedComp.selected.forEach(element => {
      console.log(element.id)
      locArray.push(element.id)
    });
    console.log(locArray);
    this.data.offeredCompetencies = locArray;
  }

  selectHandlerOfferedUeberComp(row: ResolvedUeberCompetenceDto) {

    this.selectionOfferedUeberComp.toggle(row);

    let locArray : Array<string> = [];
    this.selectionOfferedUeberComp.selected.forEach(element => {
      console.log(element.id)
      locArray.push(element.id)
    });
    console.log(locArray);
    this.data.offeredUeberCompetencies = locArray;
  }


  getCompetencies(): void {
    
    this.compService.repositoryMgmtControllerLoadResolvedRepository(this.data.repoId).subscribe({
      next: (v) => {
        console.log(v)
   
        this.competencies = v.competencies
        this.ueber_competencies = v.ueberCompetencies

      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })

  }

  onNoClick(): void {
    this.dialogRef.close();
  }



}