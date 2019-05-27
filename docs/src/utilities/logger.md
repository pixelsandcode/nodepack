





  

```
import winston, { createLogger, format } from 'winston';
import RollbarTransport from 'winston-transport-rollbar-3';


```







We have 2 different log strategies based on environments:
* Production: only warnings are reported to rollbar https://rollbar.com/tectual/nodepack/
* Other environments : All logs are reported in console


  

```

const rollbarConfig = {
  accessToken: 'b54e1dd5aa354dc9a57904d33634984d',
  environment: process.env.NODE_ENV,
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
  loggerInstance = createLogger({ transports: [new RollbarTransport({ rollbarConfig })] });
}

const logger = loggerInstance;

export default logger;


```




