import { IArticle } from 'api';
import { ArticleDocument } from '../../models';

export async function editArticle(this: ArticleDocument, data: IArticle): Promise<void> {
  this.title = data.title;
  this.body = data.body;
  await this.save();
}