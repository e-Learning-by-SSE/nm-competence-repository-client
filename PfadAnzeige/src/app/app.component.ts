import { Component } from '@angular/core';
import { AuthenticationService } from 'competence_repository_api_typescript-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UI Prototyp';

  constructor( private authService: AuthenticationService){}

 

}
