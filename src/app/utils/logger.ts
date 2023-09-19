/*
import { createLogger, format, transports } from "winston";

const getLogger = (filename = 'application') => {

    const consoleTransport = new transports.Console({
        level: process.env.LOG_LEVEL,
        handleExceptions: false,
        format: format.printf((i) => `${i.message}`),
    });

    const logger = createLogger({
        level: 'info',
        format: format.combine(
            format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss',
            }),
            format.errors({ stack: true }),
            format.splat(),
            format.printf(
                ({ level, message, label = process.env.NODE_ENV, timestamp }) =>
                    `${timestamp} [${label}] ${level}: ${message}`
            )
        ),
        defaultMeta: { service: 'my-app' },
        transports: [consoleTransport],
    });

    return logger;
}

export default getLogger();
*/

/*
//Bunyan also wants 'fs'

import bunyan from 'bunyan';

const logger = bunyan.createLogger({
    name: 'Peter',
    stream: process.stdout,
    level: 'info'
});

export default logger;
*/
// Pino Attempt

import pino from 'pino'

//const logger = pino({ browser: { asObject: true } });
const logger = pino();

export default logger;
