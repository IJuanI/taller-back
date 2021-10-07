import { Identificable } from 'api/common';

export interface IArticle
  extends IArticlePreview {
    body: string;
}

export interface IArticlePreview {
  title: string;
}

export type Article = IArticle & Identificable;
export type ArticlePreview = IArticlePreview & Identificable;
