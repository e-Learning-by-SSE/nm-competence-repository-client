import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CompetenciesService, CompetenceDto } from 'competence_repository_api_typescript-angular';


@Component({
  selector: 'app-competece-detail',
  templateUrl: './competece-detail.component.html',
  styleUrls: ['./competece-detail.component.scss']
})
export class CompeteceDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private compService: CompetenciesService  ) {}

  ngOnInit(): void  { this.getHero();
}

getHero(): void {
  let id = '';
  id = String(this.route.snapshot.paramMap.get('id'));
 this.compService.repositoryMgmtControllerGetCompetence(id)
   .subscribe(comp => this.competence = comp);
}
  @Input() competence?: CompetenceDto;
}
