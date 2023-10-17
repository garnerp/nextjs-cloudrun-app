'use client';
import { FaroErrorBoundary } from '@grafana/faro-react';

import { initializeFaro } from '@grafana/faro-web-sdk';
import {
    ConsoleInstrumentation,
    ConsoleTransport,
    ErrorsInstrumentation,
    FetchTransport,
    LogLevel,
    SessionInstrumentation,
    WebVitalsInstrumentation,
  } from '@grafana/faro-web-sdk';

  /*
const faro = initializeFaro({
    instrumentations: [
      new ErrorsInstrumentation(),
//      new WebVitalsInstrumentation(),
//      new ConsoleInstrumentation({
//        disabledLevels: [LogLevel.TRACE, LogLevel.ERROR], // console.log will be captured
      }),
//      new SessionInstrumentation(),
    ],
    transports: [
//      new FetchTransport({
//        url: 'http://localhost:12345/collect',
//        apiKey: 'secret',
//      }),
      new ConsoleTransport(),
    ],
    app: {
      name: 'frontend',
      version: '1.0.0',
    },
  });
*/

if (typeof window !== 'undefined') {
const faro = initializeFaro({
  app: {
    name: 'frontend',
    version: '1.0.0',
  },
  instrumentations: [
    new ErrorsInstrumentation(),
    new WebVitalsInstrumentation(),
    new ConsoleInstrumentation({
      //disabledLevels: [LogLevel.TRACE, LogLevel.ERROR], // console.log will be captured
    }),
    new SessionInstrumentation(),
  ],
    transports: [
      new ConsoleTransport(),
    ],

  });
//  faro.api.pushLog(['log'])
//  faro.api.pushError(['error'])
  faro.api.pushEvent('user clicked add-to-cart');
  faro.api.pushLog(['Faro was initialized']);
//  console.error('ERROR FROM FARO')
};




export function Providers({ children }) {
    return (
        <FaroErrorBoundary>{children}</FaroErrorBoundary>
    );
}