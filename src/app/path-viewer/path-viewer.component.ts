import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Edge, Node } from '@swimlane/ngx-graph';
import { PAthFinderService, ProofPathDTO } from 'competence_ai_api_typescript-angular';
import { CompetenceDto, RepositoryDto, ResolvedUeberCompetenceDto, LearningObjectDto, LearningObjectGroupDto, LearningObjectsService, AuthenticationService, CompetenciesService } from 'competence_repository_api_typescript-angular';
import { timeHours } from 'd3';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-path-viewer',
  templateUrl: './path-viewer.component.html',
  styleUrls: ['./path-viewer.component.scss']
})
export class PathViewerComponent implements OnInit {

  competencies: CompetenceDto[] = [];
  repos: RepositoryDto[] = [];
  ueber_competencies: ResolvedUeberCompetenceDto[] = [];
  los: LearningObjectDto[] = [];
  losGroups: LearningObjectGroupDto[] = [];
  selected: RepositoryDto = {
    userId: '',
    id: '',
    name: ''
  };
  prediction: String[] = [];
  nodes: Node[] = [];
  edges: Edge[] = [];
  update$: Subject<any> = new Subject();

  constructor(private router: Router, private pathService: PAthFinderService, private loService: LearningObjectsService, private authService: AuthenticationService, private compService: CompetenciesService) { }
  ngOnInit(): void {
    this.loService.configuration.accessToken = this.authService.configuration.accessToken
    this.getRepos();
  }
  getRepos(): void {
    this.compService.repositoryMgmtControllerListRepositories().subscribe({
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
    this.getCompetencies();
    this.sayHalloPathFinder();
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
  getCompetencies(): void {
    this.compService.repositoryMgmtControllerLoadResolvedRepository(this.selected.id).subscribe({
      next: (v) => {
        console.log(v)
        this.competencies = v.competencies
        this.ueber_competencies = v.ueberCompetencies

      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })

  }

  sayHalloPathFinder(): void {
    console.log('Path');
    this.pathService.getHello().subscribe({
      next: (v) => {
        console.log('Pathfinder says : ')
        console.log(v)
        
      },
      error: (e) => console.error(e),
      complete: () => {
        console.info('complete');

      }
    })
  }
  findPath() {
    let locProofPathDto: ProofPathDTO = {
      id: 0,
      timestamp: 0,
      event: '',
      user_id: '',
      user_token: String(this.authService.configuration.accessToken),
      rep_id: 0,
      goal_id: 0
    };
    console.log('findPath');
    this.pathService.postConceptMapPrediction(locProofPathDto).subscribe
      ({
        next: (v) => {
          console.log('Pathfinder says : ')
          console.log(v)
          this.prediction = v;
        },
        error: (e) => console.error(e),
        complete: () => {
          console.info('complete')
          this.drawResult();
        }
      })
  }

  drawResult(): void {
    let loc : String[] = [];
    this.prediction.forEach(element =>
      {
        loc.push(element.substring(0,element.length-2))
      })
      var result = this.los.filter(obj => {
        return obj.id === loc[0]
      })



    loc.forEach(element => {
     var result :LearningObjectDto[] = this.los.filter(obj => {
        return obj.id === element
      })
      console.log(result);
      this.nodes.push({
        id: result[0].id,
        label: result[0].id,
        data: {name:result[0].name}
      });
    
    });
    let x = this.prediction.length - 1;
    let y = 0
    while ( y<x) {
      this.edges.push(
        {
          id: 'LOtoLO',
          source: loc[y].toString(),
          target: loc[y+1].toString(),

        }
      )
      y=y+1;
    }
    console.log(this.nodes)
    console.log(this.edges)
    this.update$.next(true);
  }
}
