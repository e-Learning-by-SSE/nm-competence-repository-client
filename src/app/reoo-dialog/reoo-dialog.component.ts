import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RepositoryCreationDto } from 'competence_repository_api_typescript-angular'
@Component({
  selector: 'app-reoo-dialog',
  templateUrl: './reoo-dialog.component.html',
  styleUrls: ['./reoo-dialog.component.scss']
})
export class ReooDialogComponent  {
  constructor(
    public dialogRef: MatDialogRef<ReooDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RepositoryCreationDto,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}