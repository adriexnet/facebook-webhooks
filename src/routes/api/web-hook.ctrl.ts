import { Router, Request, Response, NextFunction } from 'express';

const updates: any[] = [];

export class WebHookRouter {
  public router: Router;

  constructor() {
    this.init();
  }

  public init(): void {
    this.router = Router();
    this.router.get('/web-hooks', this.subscribe);
    this.router.post('/web-hooks', this.call);
    this.router.get('/web-hooks/status', this.status);
  }

  public subscribe(req: Request, res: Response, next: NextFunction) {
    if (
      req.param('hub.mode') !== 'subscribe' ||
      req.param('hub.verify_token') !== process.env.APP_TOKEN
    ) {
      res.sendStatus(400);
      return;
    }

    res.send(req.param('hub.challenge'));
  }

  public call(req: Request | any, res: Response, next: NextFunction) {
    if (!req.isXHubValid()) {
      res.sendStatus(401);
      return;
    }

    updates.unshift(req.body);
    res.sendStatus(200);
  }

  public status(req: Request, res: Response, next: NextFunction) {
    res.send('<pre>' + JSON.stringify(status, null, 2) + '</pre>');
  }
}

export default new WebHookRouter().router;
