import { Router } from 'express';

class ApiRoute {
  public router: Router = Router();

  constructor() {
  }
}
export const apiRouter = new ApiRoute().router;
