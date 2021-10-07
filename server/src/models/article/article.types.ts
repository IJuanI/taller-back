import { IArticle } from 'api';
import { Document, Model } from 'mongoose';

export interface ArticleDocument extends IArticle, Document {
  articleId: string;
  editArticle: (this: ArticleDocument, data: IArticle) => Promise<void>;
}

export interface IArticleModel extends Model<ArticleDocument> {
  listArticles: (this: Model<ArticleDocument>) => Promise<ArticleDocument[]>;
  findArticle: (this: Model<ArticleDocument>, articleId: string) => Promise<ArticleDocument>;
}
