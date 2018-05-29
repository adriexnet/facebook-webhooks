import { Router, Request, Response, NextFunction } from 'express';

export class WebHookRouter {
  public router: Router;

  constructor() {
    this.init();
  }

  public init(): void {
    this.router = Router();
    this.router.post('/web-hooks', this.call);
  }

  public call(req: Request, res: Response, next: NextFunction) {
    res.send({
      details: [],
    });
  }
}

export default new WebHookRouter().router;
