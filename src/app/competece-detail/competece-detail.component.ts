import { Component, Input, OnInit } from '@angular/core';
import { CompetenceDto } from 'competence_repository_api_typescript-angular';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CompetenciesService } from 'competence_repository_api_typescript-angular';
@Component({
  selector: 'app-competece-detail',
  templateUrl: './competece-detail.component.html',
  styleUrls: ['./competece-detail.component.scss']
})
export class CompeteceDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private compService: CompetenciesService,
    private location: Location
  ) {}

  ngOnInit(): void  { this.getHero();
}

getHero(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
 //this.compService (id)
   // .subscribe(hero => this.hero = hero);
}
  @Input() competence?: CompetenceDto;
}
