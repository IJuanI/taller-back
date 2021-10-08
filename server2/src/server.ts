import express, { Application } from 'express';
import dotenv from 'dotenv';
import { matchRouter } from './routers';
import { connectModel, disconnectModel } from './model/database';

export class Server {

  public app: Application;

  constructor() {
    this.app = express();

    this.config();
    this.setRouters();
  }

  public config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  public setRouters(): void {
    this.app.use('/match', matchRouter);
  }

  public start(): void {
    connectModel();
    const server = this.app.listen(process.env.PORT || 3000, () => {
      console.log('El servidor inició en el puerto', process.env.PORT || 3000);
    });

    process.on('exit', () => {
      server.close();
      disconnectModel();
    });
    process.on('SIGINT', () => {
      server.close();
      disconnectModel();
      process.exit();
    });
  }
}

dotenv.config();
new Server().start();
