import { errorHandler, notFoundHandler } from 'express-api-error-handler';
import { logger } from '../libs';

export const htpp500Handler = () => errorHandler({
  log: ({ err, req, body }) => {
    logger.error(err, `${body.status} ${req.method} ${req.url}`);
  },
  hideProdErrors: false,
});

export const http404Handler = () => notFoundHandler({
  log: ({ req }) => {
    logger.error(`404 ${req.method} ${req.url}`);
  },
});
