import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateArticleRequest, CreateArticleResponse, DeleteArticleRequest, DeleteArticleResponse, EditArticleRequest, EditArticleResponse, GetArticleRequest, GetArticleResponse, ListArticlesRequest, ListArticlesResponse } from 'api';
import { environment } from 'client/config';
import { Observable, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'platform' })
export class ArticlesService {

  private _listSubject = new ReplaySubject<ListArticlesResponse>(1)

  constructor(private httpClient: HttpClient) { }

  public listArticles(_: ListArticlesRequest): Observable<ListArticlesResponse> {
    this.updateList();
    return this._listSubject;
  }

  public getArticle(req: GetArticleRequest): Observable<GetArticleResponse> {
    return this.httpClient.get<GetArticleResponse>(`${environment.url}/article/${req.id}`);
  }

  public createArticle(req: CreateArticleRequest): Observable<CreateArticleResponse> {
    return this.httpClient
      .post<CreateArticleResponse>(`${environment.url}/article`, req)
      .pipe(tap(this.updateList));
  }

  public editArticle(req: EditArticleRequest): Observable<EditArticleResponse> {
    return this.httpClient
      .put<EditArticleResponse>(`${environment.url}/article/${req.id}`, req)
      .pipe(tap(this.updateList));
  }

  public deleteArticle(req: DeleteArticleRequest): Observable<DeleteArticleResponse> {
    return this.httpClient
      .delete<DeleteArticleResponse>(`${environment.url}/article/${req.id}`)
      .pipe(tap(this.updateList));
  }

  private updateList = () =>
    this.httpClient.get<ListArticlesResponse>(`${environment.url}/article`)
      .subscribe({ next: this._listSubject.next });

}
