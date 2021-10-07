export class HttpError extends Error {
  constructor(
    public status: number,
    public message: string) {
    super(message);
  }

  public log(): any { return this.message }
}
