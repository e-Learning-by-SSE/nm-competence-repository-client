/**
 * Competence Repository
 * The API description of the Competence Repository.
 *
 * OpenAPI spec version: 0.3.2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CompetenceDto } from './competenceDto';
import { ResolvedUeberCompetenceDto } from './resolvedUeberCompetenceDto';

export interface ResolvedRepositoryDto { 
    id: string;
    taxonomy?: string;
    description?: string;
    competencies: Array<CompetenceDto>;
    ueberCompetencies: Array<ResolvedUeberCompetenceDto>;
    name: string;
    version?: string;
}