export * from './authentication.service';
import { AuthenticationService } from './authentication.service';
export * from './competencies.service';
import { CompetenciesService } from './competencies.service';
export * from './learningObjects.service';
import { LearningObjectsService } from './learningObjects.service';
export const APIS = [AuthenticationService, CompetenciesService, LearningObjectsService];
