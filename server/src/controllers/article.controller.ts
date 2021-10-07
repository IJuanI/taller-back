import { Article, ArticlePreview, IArticle } from 'api';
import { Request, Response } from 'express';
// import { NotFoundError } from '../errors';
import { ArticleModel } from '../models';
import { generateId } from '../utils';

class ArticleController {
  public async list(_req: Request, res: Response) {
    const articles = (await ArticleModel.listArticles())
      .map(mArticle => ({ id: mArticle.articleId, title: mArticle.title } as ArticlePreview));

    res.send(articles);
  }

  public async getDetails(req: Request, res: Response) {
    const mArticle = await ArticleModel.findArticle(req.params.id);
    if (!mArticle) {
      // throw new NotFoundError();
      res.status(404).send('Requested article not found.');
      return;
    }

    res.send({ id: mArticle.articleId, title: mArticle.title, body: mArticle.body } as Article);
  }

  public async create(req: Request, res: Response) {
    const data: IArticle = req.body;
    let articleId = generateId();
    while (await ArticleModel.findArticle(articleId))
      articleId = generateId();

    ArticleModel.create({ articleId: articleId, title: data.title, body: data.body });
    res.send(articleId);
  }

  public async edit(req: Request, res: Response) {
    const data: IArticle = req.body;
    const mArticle = await ArticleModel.findArticle(req.params.id);
    if (!mArticle) {
      // throw new NotFoundError();
      res.status(404).send('Requested article not found.');
      return;
    }

    await mArticle.editArticle(data);
    res.send();
  }

  public async delete(req: Request, res: Response) {
    const deleteRes = await ArticleModel.deleteOne({ articleId: req.params.id });
    if (!deleteRes.deletedCount) {
      // throw new NotFoundError();
      res.status(404).send('Requested article not found.');
      return;
    }

    res.send();
  }
}
export const articleController = new ArticleController();
