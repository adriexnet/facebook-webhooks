import { Router, Request, Response, NextFunction } from 'express';

export class WebHookRouter {
  public router: Router;

  constructor() {
    this.init();
  }

  public init(): void {
    this.router = Router();
    this.router.get('/web-hooks', this.call);
  }

  public call(req: Request, res: Response, next: NextFunction) {
    if (
      req.param('hub.mode') !== 'subscribe' ||
      req.param('hub.verify_token') !== process.env.TOKEN
    ) {
      res.sendStatus(400);
      return;
    }

    res.send(req.param('hub.challenge'));
  }
}

export default new WebHookRouter().router;
