import { model } from 'mongoose';
import { IMatchModel } from './match.types';
import { MatchSchema } from './match.schema';
import { MatchDocument } from './match.types';

export const MatchModel = model<MatchDocument>('Match', MatchSchema) as IMatchModel;
