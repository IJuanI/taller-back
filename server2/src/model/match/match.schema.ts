import { Schema } from 'mongoose';
import { findMatch } from '../../functions/match';
// import { findSchema } from '../../functions';

export const MatchSchema = new Schema({
  matchId: String,
  equipo_local: String,
  equipo_visitante: String,
  score_local: Number,
  score_visitante: Number,
});

// ArticleSchema.statics.listArticles = listArticles;
MatchSchema.statics.findMatch = findMatch;
// ArticleSchema.methods.editArticle = editArticle;
