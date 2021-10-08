import { IMatch } from 'api';
import { Document, Model } from 'mongoose';

export interface MatchDocument extends IMatch, Document {
  matchId: string;
  // editMatch: (this: MatchDocument, data: IMatch) => Promise<void>;
}

export interface IMatchModel extends Model<MatchDocument> {
  // listMatchs: (this: Model<MatchDocument>) => Promise<MatchDocument[]>;
  findMatch: (this: Model<MatchDocument>, matchId: string) => Promise<MatchDocument>;
}
