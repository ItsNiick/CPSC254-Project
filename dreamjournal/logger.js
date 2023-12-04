// logger.js
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info', // Log level
  format: winston.format.json(), // Log format (JSON)
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }), // Log errors to error.log
    new winston.transports.File({ filename: 'combined.log' }) // Log all messages to combined.log
  ]
});

// Export the logger object
export default logger;
