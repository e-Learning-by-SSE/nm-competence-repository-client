import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UeberCompetenceCreationDto } from 'competence_repository_api_typescript-angular';

@Component({
  selector: 'app-uebercomp-dialog',
  templateUrl: './uebercomp-dialog.component.html',
  styleUrls: ['./uebercomp-dialog.component.scss']
})
export class UebercompDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UebercompDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UeberCompetenceCreationDto,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }}

