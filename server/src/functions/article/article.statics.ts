import { Model } from 'mongoose';
import { ArticleDocument } from '../../models';

export async function listArticles(this: Model<ArticleDocument>): Promise<ArticleDocument[]> {
  return await this.find().exec();
}

export async function findArticle(this: Model<ArticleDocument>, articleId: string): Promise<ArticleDocument> {
  return await this.findOne({ articleId }).exec();
}
