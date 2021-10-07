import { Article, ArticlePreview } from './articles';

export type ListArticlesRequest = void;
export type ListArticlesResponse = ArticlePreview[];

export interface GetArticleRequest {
  id: number
};
export type GetArticleResponse = Article;

export type CreateArticleRequest = Article;
export type CreateArticleResponse = void;

export type EditArticleRequest = Article;
export type EditArticleResponse = void;

export interface DeleteArticleRequest {
  id: number
};
export type DeleteArticleResponse = void;