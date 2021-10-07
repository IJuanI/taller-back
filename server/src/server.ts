import compression from 'compression';
import dotenv from 'dotenv';
import express, { Application } from 'express';
import fs from 'fs';
import morgan from 'morgan';
import path from 'path';
import { connectModel, disconnectModel } from './models';
import { apiRouter, articleRouter } from './routes';
import { logger, myErrorHandler } from './utils';

class Server {
  public server: any;
  public app: Application;

  constructor() {
    this.app = express();

    this.exitHandlers();

    this.config();
    this.routes();
    this.errorHandler();
  }

  public config(): void {
    this.app.set('port', process.env.PORT || 3000);
    
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    
    if (process.env.NODE_ENV !== 'production')
    this.app.use(morgan('dev'));
    
    this.app.use(morgan('common', {
      stream: fs.createWriteStream(path.join(__dirname, '..', 'logs', 'access.log'))
    }));
  }
  
  public routes(): void {
    this.app.use('/', apiRouter);
    this.app.use('/article', articleRouter);
  }

  public exitHandlers(): void {
    process.on('exit', () => this.stop(false));
    process.on('SIGINT', () => this.stop);
    process.on('SIGUSR1', () => this.stop);
    process.on('SIGUSR2', () => this.stop);
    process.on('uncaughtException', (ex) => {
      console.error(ex);
      this.stop();
    });
  }
  
  public errorHandler(): void {
    this.app.use(myErrorHandler);
  }
  public start(): void {
    connectModel();
    const server = this.app.listen(this.app.get('port'),
      () => logger.info('Server on port', this.app.get('port')));

      // server.close();
  }

  public stop = (doExit: boolean = true) => {
    disconnectModel();
    if (doExit) process.exit();
  }
}

dotenv.config();
new Server().start();

