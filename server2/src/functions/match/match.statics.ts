import { Model } from 'mongoose';
import { MatchDocument } from '../../model';

// export async function listMatchs(this: Model<MatchDocument>): Promise<MatchDocument[]> {
//   return await this.find().exec();
// }

export async function findMatch(this: Model<MatchDocument>, matchId: string): Promise<MatchDocument> {
  return await this.findOne({ matchId }).exec();
}
