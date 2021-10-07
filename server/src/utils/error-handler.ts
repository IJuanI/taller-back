import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../errors';
import { logger } from './logging';

export function myErrorHandler(
  error: HttpError, _request: Request,
  response: Response, _next: NextFunction) {
    const status = error.status || 500;
    const message = error.message || 'There was an error.';
    logger.error(error.log());
    response
      .status(status)
      .send({
        status,
        message,
      });
}