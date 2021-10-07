import winston from 'winston';
import 'winston-daily-rotate-file';


export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp()
  ),
  transports: [
    new winston.transports.DailyRotateFile({
      filename: 'error.log',
      datePattern: 'yyyy-MM-dd.',
      level: 'error',
      dirname: __dirname + '/../logs', 
      handleExceptions: true,
    }),
    new winston.transports.DailyRotateFile({
      filename: 'server.log',
      datePattern: 'yyyy-MM-dd.',
      dirname: __dirname + '/../logs', 
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp(),
    ),
  }));
}
