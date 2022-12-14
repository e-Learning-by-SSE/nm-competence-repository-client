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

export interface UnResolvedUeberCompetenceDto { 
    name: string;
    description?: string;
    nestedCompetencies?: Array<string>;
    nestedUeberCompetencies?: Array<string>;
    id: string;
    parents: Array<string>;
}