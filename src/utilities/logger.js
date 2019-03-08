import winston, { createLogger, format } from 'winston';
import RollbarTransport from 'winston-transport-rollbar-3';

// Set up a logger which reports to rollbar on production errors https://rollbar.com/tectual/nodepack/
// and track development errors on console
const rollbarConfig = {
  accessToken: 'b54e1dd5aa354dc9a57904d33634984d',
  environment: 'production',
};

let loggerInstance;

if (process.env.NODE_ENV !== 'production') {
  loggerInstance = createLogger({
    transports: [
      new winston.transports.Console({
        format: format.combine(
          format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
          format.simple(),
          format.printf(info => `${info.timestamp} - ${info.level}: ${info.message}`),
          format.colorize({ all: true }),
        ),
      }),
    ],
  });
} else {
  loggerInstance = createLogger({
    transports: [
      new RollbarTransport({ rollbarConfig }),
    ],
  });
}

const logger = loggerInstance;

export default logger;
