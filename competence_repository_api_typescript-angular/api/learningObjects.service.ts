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
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { LearningObjectCreationDto } from '../model/learningObjectCreationDto';
import { LearningObjectDto } from '../model/learningObjectDto';
import { LearningObjectGroupCreationDto } from '../model/learningObjectGroupCreationDto';
import { LearningObjectGroupDto } from '../model/learningObjectGroupDto';
import { LearningObjectModificationDto } from '../model/learningObjectModificationDto';
import { LoGoalCreationDto } from '../model/loGoalCreationDto';
import { LoGoalDto } from '../model/loGoalDto';
import { LoRepositoryCreationDto } from '../model/loRepositoryCreationDto';
import { LoRepositoryDto } from '../model/loRepositoryDto';
import { LoRepositoryListDto } from '../model/loRepositoryListDto';
import { LoRepositoryModifyDto } from '../model/loRepositoryModifyDto';
import { ShallowLoRepositoryDto } from '../model/shallowLoRepositoryDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class LearningObjectsService {

    protected basePath = '/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param body 
     * @param repositoryId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public loRepositoryControllerAddGoal(body: LoGoalCreationDto, repositoryId: string, observe?: 'body', reportProgress?: boolean): Observable<LoGoalDto>;
    public loRepositoryControllerAddGoal(body: LoGoalCreationDto, repositoryId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LoGoalDto>>;
    public loRepositoryControllerAddGoal(body: LoGoalCreationDto, repositoryId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LoGoalDto>>;
    public loRepositoryControllerAddGoal(body: LoGoalCreationDto, repositoryId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling loRepositoryControllerAddGoal.');
        }

        if (repositoryId === null || repositoryId === undefined) {
            throw new Error('Required parameter repositoryId was null or undefined when calling loRepositoryControllerAddGoal.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<LoGoalDto>('post',`${this.basePath}/lo_repository/${encodeURIComponent(String(repositoryId))}/add_goal`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param repositoryId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public loRepositoryControllerAddLoGroup(body: LearningObjectGroupCreationDto, repositoryId: string, observe?: 'body', reportProgress?: boolean): Observable<LearningObjectGroupDto>;
    public loRepositoryControllerAddLoGroup(body: LearningObjectGroupCreationDto, repositoryId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LearningObjectGroupDto>>;
    public loRepositoryControllerAddLoGroup(body: LearningObjectGroupCreationDto, repositoryId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LearningObjectGroupDto>>;
    public loRepositoryControllerAddLoGroup(body: LearningObjectGroupCreationDto, repositoryId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling loRepositoryControllerAddLoGroup.');
        }

        if (repositoryId === null || repositoryId === undefined) {
            throw new Error('Required parameter repositoryId was null or undefined when calling loRepositoryControllerAddLoGroup.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<LearningObjectGroupDto>('post',`${this.basePath}/lo_repository/${encodeURIComponent(String(repositoryId))}/add_learning_object_group`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param repositoryId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public loRepositoryControllerCreateLearningObject(body: LearningObjectCreationDto, repositoryId: string, observe?: 'body', reportProgress?: boolean): Observable<LearningObjectDto>;
    public loRepositoryControllerCreateLearningObject(body: LearningObjectCreationDto, repositoryId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LearningObjectDto>>;
    public loRepositoryControllerCreateLearningObject(body: LearningObjectCreationDto, repositoryId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LearningObjectDto>>;
    public loRepositoryControllerCreateLearningObject(body: LearningObjectCreationDto, repositoryId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling loRepositoryControllerCreateLearningObject.');
        }

        if (repositoryId === null || repositoryId === undefined) {
            throw new Error('Required parameter repositoryId was null or undefined when calling loRepositoryControllerCreateLearningObject.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<LearningObjectDto>('post',`${this.basePath}/lo_repository/${encodeURIComponent(String(repositoryId))}/add_learning_object`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public loRepositoryControllerCreateRepository(body: LoRepositoryCreationDto, observe?: 'body', reportProgress?: boolean): Observable<ShallowLoRepositoryDto>;
    public loRepositoryControllerCreateRepository(body: LoRepositoryCreationDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ShallowLoRepositoryDto>>;
    public loRepositoryControllerCreateRepository(body: LoRepositoryCreationDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ShallowLoRepositoryDto>>;
    public loRepositoryControllerCreateRepository(body: LoRepositoryCreationDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling loRepositoryControllerCreateRepository.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<ShallowLoRepositoryDto>('post',`${this.basePath}/lo_repository/add`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param groupId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public loRepositoryControllerGetLoGroup(groupId: string, observe?: 'body', reportProgress?: boolean): Observable<LearningObjectGroupDto>;
    public loRepositoryControllerGetLoGroup(groupId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LearningObjectGroupDto>>;
    public loRepositoryControllerGetLoGroup(groupId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LearningObjectGroupDto>>;
    public loRepositoryControllerGetLoGroup(groupId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (groupId === null || groupId === undefined) {
            throw new Error('Required parameter groupId was null or undefined when calling loRepositoryControllerGetLoGroup.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<LearningObjectGroupDto>('get',`${this.basePath}/lo_repository/learning_object_groups/${encodeURIComponent(String(groupId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public loRepositoryControllerListRepositories(observe?: 'body', reportProgress?: boolean): Observable<LoRepositoryListDto>;
    public loRepositoryControllerListRepositories(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LoRepositoryListDto>>;
    public loRepositoryControllerListRepositories(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LoRepositoryListDto>>;
    public loRepositoryControllerListRepositories(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<LoRepositoryListDto>('get',`${this.basePath}/lo_repository`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param learningObjectId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public loRepositoryControllerLoadLearningObject(learningObjectId: string, observe?: 'body', reportProgress?: boolean): Observable<LearningObjectDto>;
    public loRepositoryControllerLoadLearningObject(learningObjectId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LearningObjectDto>>;
    public loRepositoryControllerLoadLearningObject(learningObjectId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LearningObjectDto>>;
    public loRepositoryControllerLoadLearningObject(learningObjectId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (learningObjectId === null || learningObjectId === undefined) {
            throw new Error('Required parameter learningObjectId was null or undefined when calling loRepositoryControllerLoadLearningObject.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<LearningObjectDto>('get',`${this.basePath}/lo_repository/learning_objects/${encodeURIComponent(String(learningObjectId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param repositoryId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public loRepositoryControllerLoadRepository(repositoryId: string, observe?: 'body', reportProgress?: boolean): Observable<LoRepositoryDto>;
    public loRepositoryControllerLoadRepository(repositoryId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LoRepositoryDto>>;
    public loRepositoryControllerLoadRepository(repositoryId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LoRepositoryDto>>;
    public loRepositoryControllerLoadRepository(repositoryId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (repositoryId === null || repositoryId === undefined) {
            throw new Error('Required parameter repositoryId was null or undefined when calling loRepositoryControllerLoadRepository.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<LoRepositoryDto>('get',`${this.basePath}/lo_repository/${encodeURIComponent(String(repositoryId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param repositoryId 
     * @param learningObjectId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public loRepositoryControllerModifyLearningObject(body: LearningObjectModificationDto, repositoryId: string, learningObjectId: string, observe?: 'body', reportProgress?: boolean): Observable<LearningObjectDto>;
    public loRepositoryControllerModifyLearningObject(body: LearningObjectModificationDto, repositoryId: string, learningObjectId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LearningObjectDto>>;
    public loRepositoryControllerModifyLearningObject(body: LearningObjectModificationDto, repositoryId: string, learningObjectId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LearningObjectDto>>;
    public loRepositoryControllerModifyLearningObject(body: LearningObjectModificationDto, repositoryId: string, learningObjectId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling loRepositoryControllerModifyLearningObject.');
        }

        if (repositoryId === null || repositoryId === undefined) {
            throw new Error('Required parameter repositoryId was null or undefined when calling loRepositoryControllerModifyLearningObject.');
        }

        if (learningObjectId === null || learningObjectId === undefined) {
            throw new Error('Required parameter learningObjectId was null or undefined when calling loRepositoryControllerModifyLearningObject.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<LearningObjectDto>('patch',`${this.basePath}/lo_repository/${encodeURIComponent(String(repositoryId))}/${encodeURIComponent(String(learningObjectId))}`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param repositoryId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public loRepositoryControllerModifyRepository(body: LoRepositoryModifyDto, repositoryId: string, observe?: 'body', reportProgress?: boolean): Observable<LoRepositoryDto>;
    public loRepositoryControllerModifyRepository(body: LoRepositoryModifyDto, repositoryId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LoRepositoryDto>>;
    public loRepositoryControllerModifyRepository(body: LoRepositoryModifyDto, repositoryId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LoRepositoryDto>>;
    public loRepositoryControllerModifyRepository(body: LoRepositoryModifyDto, repositoryId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling loRepositoryControllerModifyRepository.');
        }

        if (repositoryId === null || repositoryId === undefined) {
            throw new Error('Required parameter repositoryId was null or undefined when calling loRepositoryControllerModifyRepository.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<LoRepositoryDto>('patch',`${this.basePath}/lo_repository/${encodeURIComponent(String(repositoryId))}`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param goalId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public loRepositoryControllerShowGoal(goalId: string, observe?: 'body', reportProgress?: boolean): Observable<LoGoalDto>;
    public loRepositoryControllerShowGoal(goalId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LoGoalDto>>;
    public loRepositoryControllerShowGoal(goalId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LoGoalDto>>;
    public loRepositoryControllerShowGoal(goalId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (goalId === null || goalId === undefined) {
            throw new Error('Required parameter goalId was null or undefined when calling loRepositoryControllerShowGoal.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<LoGoalDto>('get',`${this.basePath}/lo_repository/goals/${encodeURIComponent(String(goalId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
