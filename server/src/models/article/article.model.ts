import { model } from 'mongoose';
import { IArticleModel } from './article.types';
import { ArticleSchema } from './article.schema';
import { ArticleDocument } from './article.types';

export const ArticleModel = model<ArticleDocument>('Article', ArticleSchema) as IArticleModel;
