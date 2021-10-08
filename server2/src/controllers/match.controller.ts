import { Request, Response } from 'express';
import { MatchModel } from '../model/match/match.model';


class MatchController {

  public createArticle = async (req: Request, res: Response) => {
    const body = req.body;
    if (!body || !body.equipo_local || !body.equipo_visitante || !body.score_local || !body.score_visitante || typeof(body.score_local) !== 'number') {
      res.status(412).send('Solicitud malformada');
      return;
    }
    const matchId = this.generateId();

    await MatchModel.create({
      matchId,
      equipo_local: body.equipo_local,
      equipo_visitante: body.equipo_visitante,
      score_local: body.score_local,
      score_visitante: body.score_visitante
    });

    res.send(matchId);
  }

  
  idChars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private generateId(length: number = 6): string {
    var result = '';
    for (var i = length; i > 0; --i) result += this.idChars[Math.floor(Math.random() * this.idChars.length)];
    return result;
  }

}

export const matchController = new MatchController();
