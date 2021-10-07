import { Schema } from 'mongoose';
import { editArticle, findArticle, listArticles } from '../../functions';

export const ArticleSchema = new Schema({
  id: String,
  title: String,
  body: String,
});

ArticleSchema.statics.listArticles = listArticles;
ArticleSchema.statics.findArticle = findArticle;
ArticleSchema.methods.editArticle = editArticle;
