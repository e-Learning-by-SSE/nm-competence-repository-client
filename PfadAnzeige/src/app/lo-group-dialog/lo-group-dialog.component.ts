import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LearningObjectGroupDto } from 'competence_repository_api_typescript-angular';

@Component({
  selector: 'app-lo-group-dialog',
  templateUrl: './lo-group-dialog.component.html',
  styleUrls: ['./lo-group-dialog.component.scss']
})
export class LoGroupDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LoGroupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LearningObjectGroupDto,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}