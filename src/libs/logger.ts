import { Logger, transports } from 'winston';

export const logger =  new Logger({
  transports: [
    new transports.File({
      level: 'info',
      filename: `logs/${process.env.NODE_ENV}.log`,
      handleExceptions: true,
      json: true,
      maxsize: 5242880,
      maxFiles: 5,
      colorize: false,
    }),
    new transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
    }),
  ],
  exitOnError: false,
});
