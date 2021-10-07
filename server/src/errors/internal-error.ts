import { HttpError } from './http-error';

export class InternalError extends HttpError {
  constructor(private err: any) {
    super(500, 'There was an internal error.');
  }

  public log(): any { return this.err }
}
