import { Request, Response, Router } from 'express';
import { matchController } from '../controllers/match.controller';


class MatchRouter {

  public router: Router = Router();

  constructor() {
    this.router.get('/', (req: Request, res: Response) => {
      if (!req.body) {
        res.status(412).send('Complete el cuerpo de la solicitud.');
        return;
      }
      if (!req.body.titulo) {
        res.status(412).send('Agrege un título a la solicitud.');
        return;
      }
      console.log(req.body.titulo);
      res.send((req.body.titulo as string).toUpperCase());
    });

    this.router.post('/', matchController.createArticle);
  }
}

export const matchRouter = new MatchRouter().router;
