import * as morgan from 'morgan';
import { logger } from '../libs';

const stream = {
  write: (message) => {
    logger.info(message.replace(/\n$/, ''));
  },
};

export default morgan('tiny', { stream });
