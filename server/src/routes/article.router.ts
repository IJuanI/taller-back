import { Router } from 'express';
import { articleController } from '../controllers';

class ArticleRoute {
  public router: Router = Router();

  constructor() {
    this.router.get('/:id', articleController.getDetails);
    this.router.get('/', articleController.list);
    this.router.post('/', articleController.create);
    this.router.put('/:id', articleController.edit);
    this.router.delete('/:id', articleController.delete);
  }
}
export const articleRouter = new ArticleRoute().router;
