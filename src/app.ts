import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as  xhub from 'express-x-hub';

import routes from './routes';
import morgan from './middlewares/morgan';
import { logger } from './libs';

export class App {

  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(xhub({ algorithm: 'sha1', secret: process.env.APP_SECRET }));
    this.express.use(cors());
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(morgan);
  }

  private routes(): void {
    routes.forEach((router) => {
      this.express.use('/', router);
    });
  }

  public start(): void {
    const port = process.env.PORT ? process.env.PORT : 8080;
    this.express.listen(
      port,
      () => logger.info(`listening on port ${port}!`),
    );
  }

}

export default new App();
