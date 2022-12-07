import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LearningObjectsService, LearningObjectDto, CompetenciesService, RepositoryDto } from 'competence_repository_api_typescript-angular';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.scss']
})
export class RepoDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private compService: CompetenciesService  ) {}

  ngOnInit(): void  { this.getLos();
}

getLos(): void {
  let id = '';
  id = String(this.route.snapshot.paramMap.get('id'));
 this.compService.repositoryMgmtControllerLoadRepository(id)
   .subscribe(rep => this.repo = rep);
}
  @Input() repo?: RepositoryDto;
}
